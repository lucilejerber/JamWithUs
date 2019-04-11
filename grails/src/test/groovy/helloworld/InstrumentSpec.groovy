package helloworld

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class InstrumentSpec extends Specification implements DomainUnitTest<Instrument> {

    def setup() {
    }

    def cleanup() {
    }

    void "test something"() {
        expect:"fix me"
            true == false
    }
}
