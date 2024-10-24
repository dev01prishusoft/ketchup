import type { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-text-field component.
 */
export interface FTextFieldProps extends FComponent {
    allowNegative?: boolean;
    decimals?: number;
    disabled?: boolean;
    fullHeight?: boolean;
    fullWidth?: boolean;
    group?: boolean;
    helper?: string;
    helperEnabled?: boolean;
    helperWhenFocused?: boolean;
    hiddenCounter?: boolean;
    icon?: string;
    inputMode?: string;
    inputType?: string;
    integers?: number;
    max?: number;
    maxLength?: number;
    min?: number;
    isClearable?: boolean;
    label?: string;
    leadingLabel?: boolean;
    name?: string;
    outlined?: boolean;
    readOnly?: boolean;
    shaped?: boolean;
    size?: number;
    step?: number;
    textArea?: boolean;
    trailingIcon?: boolean;
    trailingLabel?: boolean;
    value?: string;
    onBlur?: (event: FocusEvent) => void;
    onClick?: (event: MouseEvent) => void;
    onChange?: (event: UIEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onInput?: (event: UIEvent) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    onIconClick?: (event: MouseEvent) => void;
    onClearIconClick?: (event: MouseEvent) => void;
}
