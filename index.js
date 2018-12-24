/* © IBS Group. See LICENSE file for full copyright & licensing details. */

import { NativeModules, DeviceEventEmitter } from "react-native";

/** The following method listens to the codebar sensor reader event
 * whenever it emitted, and execute the callback.
 */

const barCodeScanned = ( callback ) => {
    DeviceEventEmitter.addListener( "io.ibsgroup.codeCaptured", callback );
};

/** This method removes all the codebar sensor listeners. */

const destroyListeners = () => {
    DeviceEventEmitter.removeAllListeners( "io.ibsgroup.codeCaptured" );
};

/** This method sets the bar code reader to automatic mode.  */

const setAutomaticMode = () => { 
    NativeModules.RNHoneywellBarcodeScanner.setReaderMode(
        NativeModules.RNHoneywellBarcodeScanner.AUTOMATIC 
    );
};

/** This method sets the bar code reader to manual mode.  */

const setManualMode = () => {
    NativeModules.RNHoneywellBarcodeScanner.setReaderMode(
        NativeModules.RNHoneywellBarcodeScanner.MANUAL 
    );
};

module.exports = {
    barCodeScanned,
    destroyListeners,
    setAutomaticMode,
    setManualMode
};
