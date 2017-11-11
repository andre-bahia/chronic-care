function Middleware(LocalConfiguration) {
    
        function getUrl(service) {
            return LocalConfiguration.url.concat(service);
        }
    
        return {
            getUrl: getUrl
        }
    }
    
base.factory("Middleware", ['LocalConfiguration', Middleware]);