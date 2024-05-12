import { component$ } from '@builder.io/qwik';

export const MovementFilter = component$(() => {
  return (
    <>
      <CategoryFilter />
    </>
  );
});
const CategoryFilter = component$(() => {
  return <div> </div>;
});
