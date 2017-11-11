/**
 * Created by andre on 03/06/2017.
 */
 base.factory("cookieService", cookieService);

 function cookieService($cookies) {

        function clear() {
            var stored = $cookies.getAll();
            var keys = Object.keys(stored);

            var size = keys.length;
            for (var i = 0; i < size; i++) {
                $cookies.remove(keys[i]);
            }
        }

        function setValue(key, value) {
            $cookies.putObject(key, value);
        }

        function getValue(key) {
            return $cookies.getObject(key);
        }

        return {
            clear: clear,
            getValue: getValue,
            setValue: setValue
        };
 }
