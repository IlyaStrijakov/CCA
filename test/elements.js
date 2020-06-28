const general = require ('../data/selectors.json').general;
describe('Complex Counter App', function () {
    describe('Getting to the page', function () {
        it('TC-001 Page title is Complex Counter App', function () {
            browser.url('');
            const title = browser.getTitle();
            expect(title).toEqual('Complex Counter App');
        })
    });
    describe('Elements exist', function () {
        it('TC-002 Header', function () {
            const actual = $(general.header).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-003 Total Result', function () {
            const actual = $(general.totalResult).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-004 Add Name Field', function () {
            const actual = $(general.addNameField).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-005 Label for Add Name Field', function () {
            const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length-2].isDisplayed();
            //$$('label')[$$('label').length-2]
            expect(actual).toEqual(true);
        })
        /*it('TC-004 Counter Name', function () {
            const header = $$('h3')[1].isDisplayed();
            expect(header).toEqual(true);
        })*/
        describe('Elements value', function () {
            it('TC-009 Header = Counter', function () {
                const actual = $(selectorGnrl.header).getText();
                expect(actual).toEqual(expectedGnrl.general.header);
            })
            it('TC-010 Total Result = Total: 0', function () {
                const actual = $(selectorGnrl.totalResult).getText();
                expect(actual).toEqual(expectedGnrl.general.totalResult);
            })
            it('TC-011 Label for Add Name Field = Enter Counter Title:', function () {
                const actual = $(selectorGnrl.addNameField).getValue()
                expect(actual).toEqual(expectedGnrl.general.addNameField);
            })
            it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
                const actual = $$(selectorGnrl.addNameFieldLabel)[$$(selectorGnrl.addNameFieldLabel).length-2].getText();
                expect(actual).toEqual(expectedGnrl.general.addNameFieldLabel);
            })
            it('TC-013  Label for Default Value Field = Enter Initial Count:', function () {
                const actual = $(selectorGnrl.defaultValueField).getValue();
                expect(actual).toEqual(expectedGnrl.general.defaultValueField);
            })
            it('TC-014  Placeholder for Default Calue Field = 50', function () {
                const actual = $$(selectorGnrl.defaultValueFieldLabel)[$$(selectorGnrl.addNameFieldLabel).length-1].getText();
                expect(actual).toEqual(expectedGnrl.general.defaultValueFieldLabel);
            })
            it('TC-015 Add Counter = ADD COUNTER', function () {
                const actual = $(selectorGnrl.addCounterBtn).getText();
                expect(actual).toEqual(expectedGnrl.general.addCounterBtn);
            })
        })
    });
});

