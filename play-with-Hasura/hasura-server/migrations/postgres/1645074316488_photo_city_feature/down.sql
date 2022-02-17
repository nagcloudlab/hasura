
alter table "public"."photos" drop constraint "photos_city_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."photos" add column "city_id" integer
--  null;

DROP TABLE "public"."cities";
