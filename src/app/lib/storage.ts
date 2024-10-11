type UseStorageReturnValue = {
  getItem: (key: string) => string;
  setItem: (key: string, value: string) => boolean; 
};

const useStorage = (): UseStorageReturnValue => {
  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();

  const getItem = (key: string): string => {
    return isBrowser ? window['sessionStorage'][key] : '';
  };

  const setItem = (key: string, value: string): boolean => {
    if (isBrowser) {
        window['sessionStorage'].setItem(key, value);
        return true;
    }
  
    return false;
  };
  return {
    setItem,
    getItem,
  };
};

export default useStorage;
