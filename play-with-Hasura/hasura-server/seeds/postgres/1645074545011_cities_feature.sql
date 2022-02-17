SET check_function_bodies = false;
INSERT INTO public.cities (id, name) VALUES (1, 'chennai');
INSERT INTO public.cities (id, name) VALUES (2, 'dubai');
INSERT INTO public.cities (id, name) VALUES (3, 'bengalore');
SELECT pg_catalog.setval('public.cities_id_seq', 3, true);
