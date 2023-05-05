module.exports = {".btn":{"@apply inline-flex flex-shrink-0 cursor-pointer select-none flex-wrap items-center justify-center border-transparent text-center transition duration-200 ease-in-out rounded-btn":true,"@apply h-12 px-4 text-sm min-h-12":true,"lineHeight":"1em","&-disabled,\n  &[disabled]":{"@apply pointer-events-none":true},"&-square":{"@apply h-12 w-12 p-0":true,"&:where(.btn-xs)":{"@apply h-6 w-12 p-0":true},"&:where(.btn-sm)":{"@apply h-8 w-12 p-0":true},"&:where(.btn-md)":{"@apply h-12 w-12 p-0":true},"&:where(.btn-lg)":{"@apply h-16 w-16 p-0":true}},"&-circle":{"@apply h-12 w-12 rounded-full p-0":true,"&:where(.btn-xs)":{"@apply h-6 w-6 rounded-full p-0":true},"&:where(.btn-sm)":{"@apply h-8 w-8 rounded-full p-0":true},"&:where(.btn-md)":{"@apply h-12 w-12 rounded-full p-0":true},"&:where(.btn-lg)":{"@apply h-16 w-16 rounded-full p-0":true}},"&.loading":{"&,\n    &:hover":{"@apply pointer-events-none":true},"&:before":{"@apply mr-2 h-4 w-4 rounded-full border-2":true,"animation":"spin 2s linear infinite","content":"\"\"","borderTopColor":"transparent","borderLeftColor":"transparent","borderBottomColor":"currentColor","borderRightColor":"currentColor"},"&.btn-square:before,\n    &.btn-circle:before":{"@apply mr-0":true},"&.btn-xl:before,\n    &.btn-lg:before":{"@apply h-5 w-5":true},"&.btn-sm:before,\n    &.btn-xs:before":{"@apply h-3 w-3":true}},"&-xs":{"@apply h-6 px-2 min-h-6":true,"fontSize":"0.75rem"},"&-sm":{"@apply h-8 px-3 min-h-8":true,"fontSize":"0.875rem"},"&-md":{"@apply h-12 px-4 min-h-12":true,"fontSize":"0.875rem"},"&-lg":{"@apply h-16 px-6 min-h-16":true,"fontSize":"1.125rem"},"&-wide":{"@apply w-64":true},"&-block":{"@apply w-full":true},"@apply font-semibold uppercase no-underline":true,"borderWidth":"var(--border-btn, 1px)","animation":"button-pop var(--animation-btn, 0.25s) ease-out","textTransform":"var(--btn-text-case, uppercase)","&:active:hover,\n  &:active:focus":{"animation":"none","transform":"scale(var(--btn-focus-scale, 0.95))"},"&":{"@apply border-neutral bg-neutral text-neutral-content no-underline":true,"&:hover,\n    &-active":{"@apply border-neutral-focus bg-neutral-focus":true},"&:focus-visible":{"outline":"2px solid hsl(var(--nf))","outlineOffset":"2px"}},"&-primary":{"@apply border-primary bg-primary text-primary-content":true,"&:hover,\n    &.btn-active":{"@apply border-primary-focus bg-primary-focus":true},"&:focus-visible":{"outline":"2px solid hsl(var(--p))"}},"&-secondary":{"@apply border-secondary bg-secondary text-secondary-content":true,"&:hover,\n    &.btn-active":{"@apply border-secondary-focus bg-secondary-focus":true},"&:focus-visible":{"outline":"2px solid hsl(var(--s))"}},"&-accent":{"@apply border-accent bg-accent text-accent-content":true,"&:hover,\n    &.btn-active":{"@apply border-accent-focus bg-accent-focus":true},"&:focus-visible":{"outline":"2px solid hsl(var(--a))"}},"&-info":{"@apply border-info bg-info text-info-content":true,"&:hover,\n    &.btn-active":{"@apply border-info bg-info":true},"&:focus-visible":{"outline":"2px solid hsl(var(--in))"}},"&-success":{"@apply border-success bg-success text-success-content":true,"&:hover,\n    &.btn-active":{"@apply border-success bg-success":true},"&:focus-visible":{"outline":"2px solid hsl(var(--su))"}},"&-warning":{"@apply border-warning bg-warning text-warning-content":true,"&:hover,\n    &.btn-active":{"@apply border-warning bg-warning":true},"&:focus-visible":{"outline":"2px solid hsl(var(--wa))"}},"&-error":{"@apply border-error bg-error text-error-content":true,"&:hover,\n    &.btn-active":{"@apply border-error bg-error":true},"&:focus-visible":{"outline":"2px solid hsl(var(--er))"}},"&.glass":{"&:hover,\n    &.btn-active":{"-GlassOpacity":"25%","-GlassBorderOpacity":"15%"},"&:focus-visible":{"outline":"2px solid currentColor"}},"&-ghost":{"@apply border border-transparent bg-transparent text-current":true,"&:hover,\n    &.btn-active":{"@apply border-opacity-0 bg-base-content bg-opacity-20":true},"&:focus-visible":{"outline":"2px solid currentColor"}},"&-link":{"@apply border-transparent bg-transparent text-primary underline":true,"&:hover,\n    &.btn-active":{"@apply border-transparent bg-transparent underline":true},"&:focus-visible":{"outline":"2px solid currentColor"}},"&-outline":{"@apply border-current bg-transparent text-base-content":true,"&:hover,\n    &.btn-active":{"@apply border-base-content bg-base-content text-base-100":true},"&.btn-primary":{"@apply text-primary":true,"&:hover,\n      &.btn-active":{"@apply border-primary-focus bg-primary-focus text-primary-content":true}},"&.btn-secondary":{"@apply text-secondary":true,"&:hover,\n      &.btn-active":{"@apply border-secondary-focus bg-secondary-focus text-secondary-content":true}},"&.btn-accent":{"@apply text-accent":true,"&:hover,\n      &.btn-active":{"@apply border-accent-focus bg-accent-focus text-accent-content":true}},"&.btn-success":{"@apply text-success":true,"&:hover,\n      &.btn-active":{"@apply border-success bg-success text-success-content":true}},"&.btn-info":{"@apply text-info":true,"&:hover,\n      &.btn-active":{"@apply border-info bg-info text-info-content":true}},"&.btn-warning":{"@apply text-warning":true,"&:hover,\n      &.btn-active":{"@apply border-warning bg-warning text-warning-content":true}},"&.btn-error":{"@apply text-error":true,"&:hover,\n      &.btn-active":{"@apply border-error bg-error text-error-content":true}}},"&-disabled,\n  &-disabled:hover,\n  &[disabled],\n  &[disabled]:hover":{"@apply border-opacity-0 bg-neutral bg-opacity-20 text-base-content text-opacity-20":true}},"@media (prefers-reduced-motion: reduce)":{".btn.loading:before":{"animation":"spin 10s linear infinite"}},"@keyframes spin":{"from":{"transform":"rotate(0deg)"},"to":{"transform":"rotate(360deg)"}},".btn-group":{"@apply inline-flex":true,"& > input[type=\"radio\"].btn":{"@apply appearance-none":true},"& > input[type=\"radio\"].btn:before":{"content":"attr(data-title)"},"& > input[type=\"radio\"]:checked.btn,\n  & > .btn-active":{"@apply border-primary bg-primary text-primary-content":true,"&:focus-visible":{"outline":"2px solid hsl(var(--p))"}}},"@keyframes button-pop":{"0%":{"transform":"scale(var(--btn-focus-scale, 0.95))"},"40%":{"transform":"scale(1.02)"},"100%":{"transform":"scale(1)"}},".dropdown":{"@apply relative inline-block":true},".dropdown > *:focus":{"@apply outline-none":true},".dropdown .dropdown-content":{"@apply invisible absolute z-50 opacity-0":true,"@apply origin-top scale-95 transform transition duration-200 ease-in-out":true},".dropdown-end .dropdown-content":{"@apply right-0":true},".dropdown-left .dropdown-content":{"@apply top-0 right-full bottom-auto":true,"@apply origin-right":true},".dropdown-right .dropdown-content":{"@apply left-full top-0 bottom-auto":true,"@apply origin-left":true},".dropdown-bottom .dropdown-content":{"@apply bottom-auto top-full":true,"@apply origin-top":true},".dropdown-top .dropdown-content":{"@apply bottom-full top-auto":true,"@apply origin-bottom":true},".dropdown-end.dropdown-right .dropdown-content":{"@apply bottom-0 top-auto":true},".dropdown-end.dropdown-left .dropdown-content":{"@apply bottom-0 top-auto":true},".dropdown.dropdown-open .dropdown-content,\n.dropdown.dropdown-hover:hover .dropdown-content,\n.dropdown:not(.dropdown-hover):focus .dropdown-content,\n.dropdown:not(.dropdown-hover):focus-within .dropdown-content":{"@apply visible opacity-100":true},".dropdown.dropdown-open .dropdown-content,\n.dropdown.dropdown-hover:hover .dropdown-content,\n.dropdown:focus .dropdown-content,\n.dropdown:focus-within .dropdown-content":{"@apply scale-100":true},".input":{"@apply border border-base-content border-opacity-0 bg-base-100 rounded-btn text-base":true,"&[list]::-webkit-calendar-picker-indicator":{"lineHeight":"1em"},"&-bordered":{"@apply border-opacity-20":true},"&:focus":{"outline":"2px solid hsla(var(--bc) / 0.2)","outlineOffset":"2px"},"&-ghost":{"@apply bg-opacity-5":true,"&:focus":{"@apply bg-opacity-100 text-base-content":true,"boxShadow":"none"}},"&-primary":{"@apply border-primary":true,"&:focus":{"outline":"2px solid hsl(var(--p))"}},"&-secondary":{"@apply border-secondary":true,"&:focus":{"outline":"2px solid hsl(var(--s))"}},"&-accent":{"@apply border-accent":true,"&:focus":{"outline":"2px solid hsl(var(--a))"}},"&-info":{"@apply border-info":true,"&:focus":{"outline":"2px solid hsl(var(--in))"}},"&-success":{"@apply border-success":true,"&:focus":{"outline":"2px solid hsl(var(--su))"}},"&-warning":{"@apply border-warning":true,"&:focus":{"outline":"2px solid hsl(var(--wa))"}},"&-error":{"@apply border-error":true,"&:focus":{"outline":"2px solid hsl(var(--er))"}},"&-disabled,\n  &[disabled]":{"@apply cursor-not-allowed border-base-200 bg-base-200 text-opacity-20 placeholder-base-content placeholder-opacity-20":true},"&-xs":{"@apply h-6 px-2 text-xs leading-relaxed":true},"&-md":{"@apply h-12 px-4 text-sm leading-loose":true},"&-lg":{"@apply h-16 px-6 text-lg leading-loose":true},"&-sm":{"@apply h-8 px-3 text-sm leading-8":true}}};