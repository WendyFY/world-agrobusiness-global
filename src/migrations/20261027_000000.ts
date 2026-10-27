import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(`
    CREATE TABLE "product_categories" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "slug" varchar NOT NULL,
      "description" varchar,
      "image_base64" varchar,
      "image_alt" varchar,
      "sort_order" numeric DEFAULT 0 NOT NULL,
      "published" boolean DEFAULT true NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );
    CREATE TABLE "services" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "slug" varchar NOT NULL,
      "description" varchar NOT NULL,
      "whatsapp" varchar,
      "sort_order" numeric DEFAULT 0 NOT NULL,
      "published" boolean DEFAULT true NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );
    CREATE TABLE "services_gallery" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "image_base64" varchar NOT NULL,
      "alt" varchar NOT NULL
    );
    INSERT INTO "product_categories" ("name", "slug", "description", "sort_order", "published") VALUES
      ('Motoculteurs', 'motoculteur', 'Des équipements robustes pour préparer et travailler efficacement le sol.', 1, true),
      ('Motopompes', 'motopompe', 'Des solutions de pompage adaptées à l’irrigation et aux besoins de votre exploitation.', 2, true),
      ('Irrigation', 'irrigation', 'Des équipements et systèmes pour mieux maîtriser l’eau sur votre exploitation.', 3, true),
      ('Autres équipements', 'autre', 'Découvrez les autres équipements agro-pastoraux proposés par notre équipe.', 4, true);
    ALTER TABLE "products" ADD COLUMN "category_id" integer;
    UPDATE "products" SET "category_id" = (
      SELECT "id" FROM "product_categories"
      WHERE "slug" = "products"."category"::text
    );
    ALTER TABLE "products" ALTER COLUMN "category_id" SET NOT NULL;
    ALTER TABLE "products" ADD CONSTRAINT "products_category_id_product_categories_id_fk"
      FOREIGN KEY ("category_id") REFERENCES "public"."product_categories"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
    ALTER TABLE "services_gallery" ADD CONSTRAINT "services_gallery_parent_id_fk"
      FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "products" DROP COLUMN "category";
    DROP TYPE "public"."enum_products_category";
    CREATE UNIQUE INDEX "product_categories_slug_idx" ON "product_categories" USING btree ("slug");
    CREATE INDEX "product_categories_updated_at_idx" ON "product_categories" USING btree ("updated_at");
    CREATE INDEX "product_categories_created_at_idx" ON "product_categories" USING btree ("created_at");
    CREATE UNIQUE INDEX "services_slug_idx" ON "services" USING btree ("slug");
    CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
    CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
    CREATE INDEX "services_gallery_order_idx" ON "services_gallery" USING btree ("_order");
    CREATE INDEX "services_gallery_parent_id_idx" ON "services_gallery" USING btree ("_parent_id");
    CREATE INDEX "products_category_id_idx" ON "products" USING btree ("category_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(`
    CREATE TYPE "public"."enum_products_category" AS ENUM('motoculteur', 'motopompe', 'irrigation', 'autre');
    ALTER TABLE "products" ADD COLUMN "category" "enum_products_category";
    UPDATE "products" SET "category" = (
      SELECT CASE "slug"
        WHEN 'motopompe' THEN 'motopompe'::"enum_products_category"
        WHEN 'irrigation' THEN 'irrigation'::"enum_products_category"
        WHEN 'autre' THEN 'autre'::"enum_products_category"
        ELSE 'motoculteur'::"enum_products_category"
      END
      FROM "product_categories" WHERE "id" = "products"."category_id"
    );
    ALTER TABLE "products" ALTER COLUMN "category" SET NOT NULL;
    ALTER TABLE "products" DROP CONSTRAINT "products_category_id_product_categories_id_fk";
    ALTER TABLE "products" DROP COLUMN "category_id";
    DROP TABLE "services_gallery" CASCADE;
    DROP TABLE "services" CASCADE;
    DROP TABLE "product_categories" CASCADE;
  `)
}
