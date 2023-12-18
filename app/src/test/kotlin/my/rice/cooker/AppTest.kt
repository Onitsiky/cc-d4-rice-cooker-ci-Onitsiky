/*
 * This Kotlin source file was generated by the Gradle 'init' task.
 */
package my.rice.cooker

import add
import changeState
import getRC
import getRCList
import kotlin.test.Test
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class AppTest {
    @Test fun addNewRiceCooker() {
        add(1, true);
        println(getRCList().size)
        assertTrue(2 == getRCList().size);
    }

    @Test fun getRiceCookerById() {
        var actual = getRC(2);
        assertNotNull(actual);
        assertTrue(actual.id == 2);
    }

    @Test fun changeRiceCookerState() {
        add(2, false);
        changeState(2, "isOperational", true);
        changeState(2, "isCooking", true);
        changeState(2, "isPlugged", true);
        var actual = getRC(2);

        assertNotNull(actual);
        assertTrue(actual.isOperational);
        assertTrue(actual.isCooking);
        assertTrue(actual.isPlugged);
    }
}
