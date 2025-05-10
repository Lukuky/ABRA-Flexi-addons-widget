import { html } from 'lit';

export function svgArrowLeft() {
    return html`
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7L7 13" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
}

export function svgArrowRight() {
    return html`
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
}

export function svgAddon() {
    return html`
        <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_15_192" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="-5" width="45" height="45">
                <path d="M45 -5H0V40H45V-5Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_15_192)">
                <path d="M7.03125 20.3125L22.5 31.5625L37.9688 20.3125M22.5 24.5312L37.9688 13.2812L22.5 2.03125L7.03125 13.2812L22.5 24.5312Z" stroke="#27272A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
    `;
}

export function svgCross() {
    return html`
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_14_22)">
                <mask id="mask0_14_22" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                    <path d="M25 0H0V25H25V0Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_14_22)">
                    <path d="M5.46875 5.46875L19.5312 19.5312M19.5312 5.46875L5.46875 19.5312" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_14_22">
                    <rect width="25" height="25" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    `;
}

export function svgSearch() {
    return html`
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_14_31)">
                <mask id="mask0_14_31" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                    <path d="M25 0H0V25H25V0Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_14_31)">
                    <path d="M14.3083 14.2952L21.0938 21.0938M10.1562 15.625C13.608 15.625 16.4062 12.8268 16.4062 9.375C16.4062 5.92322 13.608 3.125 10.1562 3.125C6.70447 3.125 3.90625 5.92322 3.90625 9.375C3.90625 12.8268 6.70447 15.625 10.1562 15.625Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_14_31">
                    <rect width="25" height="25" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    `;
}
