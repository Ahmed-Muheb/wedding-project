-- Run this in the Supabase SQL Editor to create the wedding wishes table.

create table if not exists public.wedding_wishes (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 100),
  attendance text not null check (attendance in ('yes', 'no')),
  message text check (char_length(message) <= 500),
  signature text,
  created_at timestamptz not null default now()
);

-- If you already created the old table, run these migrations instead:
-- alter table public.wedding_wishes add column if not exists attendance text;
-- alter table public.wedding_wishes add column if not exists signature text;
-- update public.wedding_wishes set attendance = 'yes' where attendance is null;
-- alter table public.wedding_wishes alter column attendance set not null;

alter table public.wedding_wishes enable row level security;

create policy "Anyone can read wedding wishes"
  on public.wedding_wishes
  for select
  to anon, authenticated
  using (true);

create policy "Anyone can insert wedding wishes"
  on public.wedding_wishes
  for insert
  to anon, authenticated
  with check (true);
