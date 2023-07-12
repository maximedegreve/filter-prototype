import selectPanelOneDoLight2x from './images/selectpanel-do-light.png'
import selectPanelOneDoDark2x from './images/selectpanel-do-dark.png'
import selectPanelOneDontLight2x from './images/selectpanel-dont-light.png'
import selectPanelOneDontDark2x from './images/selectpanel-dont-dark.png'
import selectPanel2OneDoLight2x from './images/selectpanel2-do-light.png'
import selectPanel2OneDoDark2x from './images/selectpanel2-do-dark.png'
import selectPanel2OneDontLight2x from './images/selectpanel2-dont-light.png'
import selectPanel2OneDontDark2x from './images/selectpanel2-dont-dark.png'
const exam = [
    {
        id: 99,
        component: 'select panel',
        image: {
            lightDo: selectPanel2OneDoLight2x,
            darkDo: selectPanel2OneDoDark2x,
            lightDont: selectPanel2OneDontLight2x,
            darkDont: selectPanel2OneDontDark2x,
        },
        explanation: `Checkmark icons indicate that the dialog will close therefore the cancel or submit button isn't needed.`,
    },
    {
        id: 100,
        component: 'select panel',
        image: {
            lightDo: selectPanelOneDoLight2x,
            darkDo: selectPanelOneDoDark2x,
            lightDont: selectPanelOneDontLight2x,
            darkDont: selectPanelOneDontDark2x,
        },
        explanation: `When a cancel or submit button is used radio buttons should be used since it becomes a form.`,
    },
]

export default exam
