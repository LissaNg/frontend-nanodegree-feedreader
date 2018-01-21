/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('all feed has URL', function(){
          allFeeds.forEach(function(feed){
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          });
        });/* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */


        it('all feed has name defined', function(){
          allFeeds.forEach(function(feed){
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          });
        });/* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });


    describe('The menu', function(){
      /* TODO: Write a new test suite named "The menu" */

          it('menu is hidden by default', function(){
            var $hiddenClass = $('body').hasClass('menu-hidden');
              expect($hiddenClass).toBe(true);
          });/* TODO: Write a test that ensures the menu element is
           * hidden by default. You'll have to analyze the HTML and
           * the CSS to determine how we're performing the
           * hiding/showing of the menu element.
           */

           it('hides when clicked', function(){
             var iconMenu = $('.menu-icon-link');
             var $hiddenClass = $('body').hasClass('menu-hidden');

             iconMenu.click();
               expect($hiddenClass).toBeTruthy();
           });


            it('shows menu when clicked', function(){
              var iconMenu = $('.menu-icon-link');
              var $hiddenClass = $('body').hasClass('menu-hidden');

                iconMenu.click();
                expect($hiddenClass).toBeFalsy();

            });
    });

    describe('Initial Entries', function(){
      /* TODO: Write a new test suite named "Initial Entries" */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

          it('loadFeed function is called and completes its work', function(){
            var entry = $('.entry');
              expect(entry.length).toBeGreaterThan(0);
          });
    });

    describe('New Feed Selection', function(){
      /* TODO: Write a new test suite named "New Feed Selection" */
      it('content changes on feed', function(done) {
        var feed1, feed2;
          loadFeed(0, function() {
              feed1 = $('.feed').html();
              loadFeed(1, function(){
                feed2 = $('.feed').html();
                expect(feed1).not.toEqual(feed2);
                done();
              });
          });
      });
    });

}());
