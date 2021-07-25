import { createContext } from 'react';
const defaultCatList = {};
const categoryContext = createContext(defaultCatList);
export default categoryContext;