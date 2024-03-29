import { ref } from 'vue';

const useBoolean = (initialState: boolean = false) => {
  const state = ref(initialState);

  const toggle = (val?: boolean | Event) => {
    state.value = val === undefined || val instanceof Event ? !state.value : Boolean(val);
  }

  const setFalse = () => {
    state.value = false;
  }

  const setTrue = () => {
    state.value = true;
  }

  return [state, { toggle, setTrue, setFalse }] as const;
}

export default useBoolean