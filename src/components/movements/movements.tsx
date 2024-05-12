import { component$, useSignal } from '@builder.io/qwik';

import { MovementFilter } from '../movement-filter/movement-filter';
export const Movements = component$(() => {
  const view = useTabStorage<View>('chart');
  return (
    <>
      <header class="navbar flex">
        <div class="navbar-start flex-initial">
          <div class="join" data-tour="grid-chart-controls">
            <button
              onClick$={() => {
                view.value = 'chart';
              }}
            >
              📊 <span>chart</span>
            </button>
            <button
              onClick$={() => {
                view.value = 'grid';
              }}
            >
              📑 <span>grid</span>
            </button>
          </div>
        </div>

        <div class="navbar-center flex-initial" data-tour="grid-filter-and-search">
          <MovementFilter></MovementFilter>
        </div>
      </header>
      <div></div>
      {view.value === 'chart' && <div>Chart</div>}
      {view.value === 'grid' && <div>Grid</div>}
    </>
  );
});

type View = 'chart' | 'grid';

function useTabStorage<T extends string>(def: T) {
  const view = useSignal<T>(def);
  return view;
}
