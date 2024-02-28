export type TFilterOptions = 'all' | 'name' | 'currency' | 'lang' | 'capital';
export type TLabelOptions = 'All' | 'Name' | 'Currency' | 'Language' | 'Capital';

export interface IOption {
  value: TFilterOptions;
  label: TLabelOptions;
}

export type TOptionList = IOption[];
