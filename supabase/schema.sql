-- NeemSeed — own Supabase project. Do not run this on Bullpen or Calabi.
create table if not exists board (
  id text primary key,
  role text not null,
  crop text not null,
  note text not null,
  created_at timestamptz not null default now()
);
