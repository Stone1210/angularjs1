describe('favoriteitems', function() {
    var favoriteitems;
    var $httpBackend;
    var ApiPath;

    var menu = 'A3';

    beforeEach(function() {
        module('public');

        inject(function($injector) {
            favoriteitems = $injector.get('UserService');
            $httpBackend = $injector.get("$httpBackend");
            ApiPath = $injector.get("ApiPath");
        });
    });

    it('should return exists in menu', function(){
        $httpBackend.whenGET(ApiPath+'/menu_items/'+menu+'.json').respond({"id":3,"short_name":"A3","name":"Chicken Corn Soup"});
        favoriteitems.checkMenuNumber(menu).then(function(response) {
            expect(response.data).toEqual({"id":3,"short_name":"A3","name":"Chicken Corn Soup"});
        });
        $httpBackend.flush();
    });

})
