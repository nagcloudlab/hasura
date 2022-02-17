
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."photos" add column "is_published" boolean
--  null;

alter table "public"."photos" drop column "is_published" cascade;
