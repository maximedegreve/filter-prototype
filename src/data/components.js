import imageActionMenuDark2x from '../images/actionmenu-dark-2x.png'
import imageActionMenuLight2x from '../images/actionmenu-light-2x.png'
import imageCardDark2x from '../images/card-dark-2x.png'
import imageCardLight2x from '../images/card-light-2x.png'
import imageSelectPanelDark2x from '../images/selectpanel-dark-2x.png'
import imageSelectPanelLight2x from '../images/selectpanel-light-2x.png'
import imageTooltipDark2x from '../images/tooltip-dark-2x.png'
import imageTooltipLight2x from '../images/tooltip-light-2x.png'

import Feature from './feature'

const primerBaseUrl = 'https://primer.style/design/'

const components = [
    {
        id: 'hover-cards',
        name: 'Hover cards',
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FocusableContent,
            Feature.Contextual,
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
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
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
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.Actionable,
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
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FormElements,
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.Actionable,
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
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FormElements,
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.Actionable,
            Feature.TriggerInGlobalNavigation,
            Feature.NoOuterRightTriggerLimitation,
        ],
        url: primerBaseUrl + 'components/dialog',
    },
    {
        id: 'Right sidesheet',
        name: 'Right sidesheet',
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.Actionable,
            Feature.TriggerInGlobalNavigation,
        ],
        url: primerBaseUrl + 'components/dialog#side-sheets',
    },
    {
        id: 'right-side-panel',
        name: 'Right sidepanel',
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FormElements,
            Feature.FocusableContent,
            Feature.DeepLinking,
            Feature.Contextual,
            Feature.Actionable,
        ],
        url: primerBaseUrl + 'foundations/layout',
    },
    {
        id: 'new-page',
        name: 'New page',
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.TriggerInGlobalNavigation,
            Feature.FormElements,
            Feature.DeepLinking,
            Feature.Actionable,
            Feature.NoOuterRightTriggerLimitation,
        ],
        url: primerBaseUrl + 'foundations/layout',
    },
]

export default components
