import ActionMenu1DoLight2x from './images/actionmenu-do-light.png'
import ActionMenu1DoDark2x from './images/actionmenu-do-dark.png'
import ActionMenu1DontLight2x from './images/actionmenu-dont-light.png'
import ActionMenu1DontDark2x from './images/actionmenu-dont-dark.png'

import ActionMenu2DoLight2x from './images/actionmenu2-do-light.png'
import ActionMenu2DoDark2x from './images/actionmenu2-do-dark.png'
import ActionMenu2DontLight2x from './images/actionmenu2-dont-light.png'
import ActionMenu2DontDark2x from './images/actionmenu2-dont-dark.png'

import ActionMenu3DoLight2x from './images/actionmenu3-do-light.png'
import ActionMenu3DoDark2x from './images/actionmenu3-do-dark.png'
import ActionMenu3DontLight2x from './images/actionmenu3-dont-light.png'
import ActionMenu3DontDark2x from './images/actionmenu3-dont-dark.png'

import ActionMenu4DoLight2x from './images/actionmenu4-do-light.png'
import ActionMenu4DoDark2x from './images/actionmenu4-do-dark.png'
import ActionMenu4DontLight2x from './images/actionmenu4-dont-light.png'
import ActionMenu4DontDark2x from './images/actionmenu4-dont-dark.png'

import ActionMenu6DoLight2x from './images/actionmenu6-do-light.png'
import ActionMenu6DoDark2x from './images/actionmenu6-do-dark.png'
import ActionMenu6DontLight2x from './images/actionmenu6-dont-light.png'
import ActionMenu6DontDark2x from './images/actionmenu6-dont-dark.png'

import ActionMenu7DoLight2x from './images/actionmenu7-do-light.png'
import ActionMenu7DoDark2x from './images/actionmenu7-do-dark.png'
import ActionMenu7DontLight2x from './images/actionmenu7-dont-light.png'
import ActionMenu7DontDark2x from './images/actionmenu7-dont-dark.png'

import ActionMenu8DoLight2x from './images/actionmenu8-do-light.png'
import ActionMenu8DoDark2x from './images/actionmenu8-do-dark.png'
import ActionMenu8DontLight2x from './images/actionmenu8-dont-light.png'
import ActionMenu8DontDark2x from './images/actionmenu8-dont-dark.png'

import ActionMenu9DoLight2x from './images/actionmenu9-do-light.png'
import ActionMenu9DoDark2x from './images/actionmenu9-do-dark.png'
import ActionMenu9DontLight2x from './images/actionmenu9-dont-light.png'
import ActionMenu9DontDark2x from './images/actionmenu9-dont-dark.png'

import ActionMenu10DoLight2x from './images/actionmenu10-do-light.png'
import ActionMenu10DoDark2x from './images/actionmenu10-do-dark.png'
import ActionMenu10DontLight2x from './images/actionmenu10-dont-light.png'
import ActionMenu10DontDark2x from './images/actionmenu10-dont-dark.png'

import ActionMenu11DoLight2x from './images/actionmenu11-do-light.png'
import ActionMenu11DoDark2x from './images/actionmenu11-do-dark.png'
import ActionMenu11DontLight2x from './images/actionmenu11-dont-light.png'
import ActionMenu11DontDark2x from './images/actionmenu11-dont-dark.png'

const exam = [
    {
        id: 88,
        component: 'action menu',
        image: {
            lightDo: ActionMenu1DoLight2x,
            darkDo: ActionMenu1DoDark2x,
            lightDont: ActionMenu1DontLight2x,
            darkDont: ActionMenu1DontDark2x,
        },
        do: `Introduce dividers for items with heavy descriptions to improve readability.`,
        dont: `Don't forget to add dividers when the menu content starts to look heavy.`,
    },
    {
        id: 89,
        component: 'action menu',
        image: {
            lightDo: ActionMenu2DoLight2x,
            darkDo: ActionMenu2DoDark2x,
            lightDont: ActionMenu2DontLight2x,
            darkDont: ActionMenu2DontDark2x,
        },
        do: `When one of the items doesn't have an icon then remove icons altogether.`,
        dont: `Don't mix items with or without icons as this makes it harder to read.`,
    },
    {
        id: 90,
        component: 'action menu',
        image: {
            lightDo: ActionMenu3DoLight2x,
            darkDo: ActionMenu3DoDark2x,
            lightDont: ActionMenu3DontLight2x,
            darkDont: ActionMenu3DontDark2x,
        },
        do: `Create a new section for additional functionality.`,
        dont: `Don't store additional toggleable functionality in trailing visuals.`,
    },
    {
        id: 91,
        component: 'action menu',
        image: {
            lightDo: ActionMenu4DoLight2x,
            darkDo: ActionMenu4DoDark2x,
            lightDont: ActionMenu4DontLight2x,
            darkDont: ActionMenu4DontDark2x,
        },
        do: `Avoid the usage of icons if the icon conflicts with the selected states checkmark.`,
        dont: `Don't use crossmark icons for single or multi select items.`,
    },
    {
        id: 93,
        component: 'action menu',
        image: {
            lightDo: ActionMenu6DoLight2x,
            darkDo: ActionMenu6DoDark2x,
            lightDont: ActionMenu6DontLight2x,
            darkDont: ActionMenu6DontDark2x,
        },
        do: `Use trailing visuals for submenu indicators or keyboard shortcuts.`,
        dont: `Don't use trailing visual to communicate selected items in submenus.`,
    },
    {
        id: 94,
        component: 'action menu',
        image: {
            lightDo: ActionMenu7DoLight2x,
            darkDo: ActionMenu7DoDark2x,
            lightDont: ActionMenu7DontLight2x,
            darkDont: ActionMenu7DontDark2x,
        },
        do: `When a menu includes a single select or multi select then all the items in the menu should be indented.`,
        dont: `Don't create invidiual alignments when your menu contains a single or multi select.`,
    },
    {
        id: 95,
        component: 'action menu',
        image: {
            lightDo: ActionMenu8DoLight2x,
            darkDo: ActionMenu8DoDark2x,
            lightDont: ActionMenu8DontLight2x,
            darkDont: ActionMenu8DontDark2x,
        },
        do: `Use action menu for quick actions.`,
        dont: `Don't add form controls like a filterable input, use SelectPanel instead.`,
    },
    {
        id: 96,
        component: 'action menu',
        image: {
            lightDo: ActionMenu9DoLight2x,
            darkDo: ActionMenu9DoDark2x,
            lightDont: ActionMenu9DontLight2x,
            darkDont: ActionMenu9DontDark2x,
        },
        do: `Use a checkmark icon for selections.`,
        dont: `Don't use form elements within a menu.`,
    },
    {
        id: 97,
        component: 'action menu',
        image: {
            lightDo: ActionMenu10DoLight2x,
            darkDo: ActionMenu10DoDark2x,
            lightDont: ActionMenu10DontLight2x,
            darkDont: ActionMenu10DontDark2x,
        },
        do: `If you want to present filterable data do this through a dialog.`,
        dont: `Don't mix select panels with action menus.`,
    },
    {
        id: 98,
        component: 'action menu',
        image: {
            lightDo: ActionMenu11DoLight2x,
            darkDo: ActionMenu11DoDark2x,
            lightDont: ActionMenu11DontLight2x,
            darkDont: ActionMenu11DontDark2x,
        },
        do: `If you want to present filterable data open a dialog instead of a submenu.`,
        dont: `Don't use form elements inside a menu.`,
    },
]

export default exam
