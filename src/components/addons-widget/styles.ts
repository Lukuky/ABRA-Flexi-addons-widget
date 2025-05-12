import { css } from 'lit';

export const widgetStyles = css`
    /**
    * There is no possible to use @font-face or @import in Lit yet, 
    * nighter importing font in <link> in render HTML does not work.
    * Therefore it is need to already have the font imported in the 
    * hosting page and use variable --font-family to pass it here.
    * More about the issue here:
    * https://github.com/lit/lit-element/issues/793
    */
    :host {
        --font-family: Arial, serif;
        --font-size: 1rem;
        --color-primary: #0e5dbb;
        --text-color-primary: #000000;
        --text-color-secondary: #6d6d70;
        --bg-color-primary: #fafafa;
        --bg-color-secondary: #f4f4f4;
        --bg-color-interactive: #ffffff;
        --bg-color-tag: #dbdbdb;
        --border-primary: solid #aaaaaa 0.1em;
        --border-interactive: solid #9c9c9c 0.1em;
        --border-radius-primary: 0.4em;
        --border-radius-interactive: 0.4em;
        --icons-color: var(--text-color-secondary);
        --addon-overview-height: 20em;
        --addon-overview-margin: 0.6em;
        --overview-rows: 2;
        --margin-container: 0;
    }

    * {
        font-family: var(--font-family);
        font-weight: light;
        padding: 0;
        margin: 0;
    }

    h1 {
        font-size: 1.6em;
        font-weight: normal;
    }

    h2 {
        font-size: 1.3em;
        font-weight: normal;
    }

    p, li {
        font-weight: lighter;
        line-height: 1.3em;
    }

    button, select, .searchWrapper, .addon {
        font-size: 1em;
        padding: 0.4em;
        border: var(--border-interactive);
        border-radius: var(--border-radius-interactive);
        background-color: var(--bg-color-interactive);
    }

    button, select, .addon {
        cursor: pointer;
    }

    button > svg {
        vertical-align: middle;
    }

    svg path {
        stroke: var(--icons-color);
    }

    select {
        min-width: 6em;
    }

    header {
        padding-bottom: 1em;
    }

    #container {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: stretch;
        border: var(--border-primary);
        border-radius: var(--border-radius-primary);
        background-color: var(--bg-color-primary);
        padding: 1em;
        margin: var(--margin-container);
    }

    #content {
        overflow-y: scroll;
        height: calc(var(--overview-rows) * var(--addon-overview-height) + 2 * var(--addon-overview-margin));
        border: var(--border-primary);
        border-radius: var(--border-radius-primary);
        margin: 1em 0;
        scroll-behavior: smooth;
    }

    #searchFilters {
        padding-top: 1em;
    }

    #pager svg {
        padding: 0.2em 0.3em;
    }

    .panel {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto 1fr;
        gap: 1em;
    }

    .panel .left {
        grid-column-start: 1;
        justify-self: flex-start;
    }

    .panel .centered {
        grid-column-start: 2;
        justify-self: center;
        text-align: center;
    }

    .panel .right {
        grid-column-start: 3;
        justify-self: flex-end;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: stretch;
        align-content: start;
        padding: var(--addon-overview-margin);
        background-color: var(--bg-color-secondary);
    }

    @media screen and (max-width: 70em) {
        .cards {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 50em) {
        .cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 30em) {
        .cards {
            grid-template-columns: 1fr;
        }
    }

    .cardWrapper {
        display: flex;
        align-items: stretch;
        height: var(--addon-overview-height);
    }

    .addon {
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        flex-grow: 1;
        text-align: center;
        gap: 0.6em;
        padding: 1.5em;
        margin: var(--addon-overview-margin);
        background-color: var(--bg-color-interactive);
        box-shadow: none;
        transition: box-shadow 0.2s ease-in;
        cursor: pointer;
    }

    .addon:hover {
        box-shadow: 0 0.5em 1em #bbb;
    }

    .addon img,
    .addon svg {
        object-fit: contain;
        max-width: 70%;
        height: 3em;
    }

    .addon svg path {
        stroke: var(--text-color-primary);
    }

    .addon .addonPerex {
        overflow-y: hidden;
    }

    .addon .addonNote {
        position: absolute;
        bottom: 1em;
        width: 100%;
        padding-top: 3em;
        color: var(--text-color-secondary);
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--bg-color-interactive), var(--bg-color-interactive));
    }

    .loading {
        justify-content: center;
    }

    .loading:hover {
        box-shadow: none;
        cursor: progress;
    }

    addons-loader {
        --size: 3em;
        --main-color: var(--color-primary);
    }

    .detail {
        display: flex;
        flex-flow: column;
        align-content: center;
        max-width: 50em;
        padding: 2em;
        margin: 0 auto;
    }
    
    .detail > * {
        grid-column: 2;
    }

    .detail h2 {
        padding: 1em 0 0.5em 0;
    }

    .detail p,
    .detail ul {
        padding-bottom: 1em;
    }

    .detail li {
        margin-left: 1em;
    }

    .detail img {
        max-width: 90%;
        margin: 0.5em 0;
    }

    .detail .perex {
        color: var(--text-color-secondary);
    }

    .banner {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        gap: 0.5em;
    }

    .btnEmpty {
        color: var(--color-primary);
        border-color: var(--color-primary);
    }

    .btnFull {
        color: var(--bg-color-interactive);
        background-color: var(--color-primary);
        border-color: var(--color-primary);
    }

    .selectWrapper {
        position: relative;
    }

    .searchWrapper {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        align-items: stretch;
        gap: 0.2em;
        padding: 0;
        background-color: var(--bg-color-interactive);
    }

    .selectWrapper > label,
    .searchWrapper > label {
        font-size: 0.7em;
        position: absolute;
        left: 1em;
        top: -0.8em;
        padding: 0 0.3em;
        background-color: var(--bg-color-interactive);
    }

    .searchWrapper > input {
        font-size: 1em;
        width: 9em;
        padding: 0 0.2em;
        border: none;
        background-color: none;
    }

    .searchWrapper:focus {
        border: none;
    }

    .searchWrapper > button {
        padding: 0.3em;
        border: none;
    }

    .searchWrapper svg {
        justify-self: flex-end;
        height: 1.5em;
    }

    .checkboxWrapper {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 0.5em;
    }

    .checkboxWrapper > input {
        width: 1.5em;
        height: 1.5em;
    }

    .partner {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 1em;
    }

    .partner > img {
        height: 1.5em;
    }

    .partner span {
        color: var(--text-color-secondary);
    }

    #addonTags {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        gap: 0.8em;
    }

    #addonTags dt {
        color: var(--text-color-secondary);
    }

    #addonTags dt:after {
        content: ':';
    }

    #addonTags dd {
        font-size: 0.8em;
        padding: 0.5em;
        border-radius: var(--border-radius-interactive);
        background-color: var(--bg-color-tag);
    }

`;