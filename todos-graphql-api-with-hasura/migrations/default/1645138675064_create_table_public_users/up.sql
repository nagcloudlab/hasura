CREATE TABLE "public"."users" ("id" text NOT NULL, "name" Text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "last_seen" timestamptz NOT NULL, PRIMARY KEY ("id") );
