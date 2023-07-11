import imageActionMenuDark2x from '../images/actionmenu-dark-2x.png'
import imageActionMenuLight2x from '../images/actionmenu-light-2x.png'
import imageCardDark2x from '../images/card-dark-2x.png'
import imageCardLight2x from '../images/card-light-2x.png'
import imageSelectPanelDark2x from '../images/selectpanel-dark-2x.png'
import imageSelectPanelLight2x from '../images/selectpanel-light-2x.png'
import imageTooltipDark2x from '../images/tooltip-dark-2x.png'
import imageTooltipLight2x from '../images/tooltip-light-2x.png'
import imageDialogDark2x from '../images/dialog-dark-2x.png'
import imageDialogLight2x from '../images/dialog-light-2x.png'
import imageNewPageDark2x from '../images/newpage-dark-2x.png'
import imageNewPageLight2x from '../images/newpage-light-2x.png'
import imageSidePanelDark2x from '../images/sidepanel-dark-2x.png'
import imageSidePanelLight2x from '../images/sidepanel-light-2x.png'
import imageSideSheetDark2x from '../images/sidesheet-dark-2x.png'
import imageSideSheetLight2x from '../images/sidesheet-light-2x.png'

import Feature from './feature'

const primerBaseUrl = 'https://primer.style/design/'

const components = [
    {
        id: 'new-page',
        name: 'New page',
        description: `Self-contained and navigable unit within a website or web application, accessible through deep linking with a unique URL, typically occupying a larger viewport than a dialog component.`,
        features: [
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.TriggerInGlobalNavigation,
            Feature.FormElements,
            Feature.DeepLinking,
            Feature.NoOuterRightTriggerLimitation,
        ],
        image: {
            dark2x: imageNewPageDark2x,
            light2x: imageNewPageLight2x,
        },
        url: primerBaseUrl + 'foundations/layout',
    },
    {
        id: 'hover-cards',
        name: 'Hover cards',
        description: `Appears when hovering over an element, providing rich information often including images, text, or interactive elements.`,
        features: [
            Feature.FocusableContent,
            Feature.TriggerInGlobalNavigation,
            Feature.NoOuterRightTriggerLimitation,
        ],
        image: {
            dark2x: imageCardDark2x,
            light2x: imageCardLight2x,
        },
        url: 'https://google.com',
    },
    {
        id: 'tooltip',
        name: 'Tooltip',
        description: `Appears when hovering over an element, providing brief contextual information or a description of the element's purpose.`,
        features: [
            Feature.Contextual,
            Feature.TriggerInGlobalNavigation,
            Feature.NoOuterRightTriggerLimitation,
        ],
        image: {
            dark2x: imageTooltipDark2x,
            light2x: imageTooltipLight2x,
        },
        url: primerBaseUrl + 'components/tooltip',
    },
    {
        id: 'action-menu',
        name: 'Action Menu',
        description: `Provides a list of selectable actions or selections in response to a trigger.`,
        features: [
            Feature.FocusableContent,
            Feature.TriggerInGlobalNavigation,
            Feature.NoOuterRightTriggerLimitation,
        ],
        image: {
            dark2x: imageActionMenuDark2x,
            light2x: imageActionMenuLight2x,
        },
        url: primerBaseUrl + 'components/action-menu',
    },
    {
        id: 'select-panel',
        name: 'Select panel',
        description: `Allows the selection of one or multiple items from a list, and it can be enhanced with additional controls like a search input.`,
        features: [
            Feature.FormElements,
            Feature.FocusableContent,
            Feature.NoOuterRightTriggerLimitation,
        ],
        image: {
            dark2x: imageSelectPanelDark2x,
            light2x: imageSelectPanelLight2x,
        },
        url: primerBaseUrl + 'components/selectpanel',
    },
    {
        id: 'dialog',
        name: 'Dialog',
        description: `Interactive overlay that prompts the user for input or displays important information.`,
        features: [
            Feature.FormElements,
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.TriggerInGlobalNavigation,
            Feature.NoOuterRightTriggerLimitation,
        ],
        image: {
            dark2x: imageDialogDark2x,
            light2x: imageDialogLight2x,
        },
        url: primerBaseUrl + 'components/dialog',
    },
    {
        id: 'Right sidesheet',
        name: 'Right sidesheet',
        description: `Dialog that slides in from the side of the viewport to provide supplementary content or functionality.`,
        features: [
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.FormElements,
            Feature.TriggerInGlobalNavigation,
        ],
        image: {
            dark2x: imageSideSheetDark2x,
            light2x: imageSideSheetLight2x,
        },
        url: primerBaseUrl + 'components/dialog#side-sheets',
    },
    {
        id: 'right-side-panel',
        name: 'Right sidepanel',
        description: `Collapsible panel that slides in from the side of the viewport to provide supplementary content or functionality without obstructing the page content.`,
        features: [
            Feature.FormElements,
            Feature.FocusableContent,
            Feature.DeepLinking,
            Feature.Contextual,
        ],
        image: {
            dark2x: imageSidePanelDark2x,
            light2x: imageSidePanelLight2x,
        },
        url: primerBaseUrl + 'foundations/layout',
    },
]

export default components
