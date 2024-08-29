// Parametrização dos itens da Navbar e Footer para facilidade da passagem de props

import { RedirectItem } from "./RedirectItem";
export interface MenuItem { 
    redirectItem: RedirectItem;
    type: string;
    dropdownItems?: RedirectItem[];
}