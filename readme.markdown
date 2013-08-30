Headless testing for continous integration with Sencha Touch 2
========

HEADLESS = <a href="http://code.google.com/p/phantomjs/downloads/list">phantomjs</a><br>
TESTING = <a href="https://github.com/pivotal/jasmine/">jasmine</a><br>
CONTINOUS INTEGRATION = <a hfref="http://git-scm.com/">git</a><br>
Sencha Touch 2 = <a href="http://www.sencha.com/products/touch/">awesome!</a>

simply:
-------------

install and make sure *phantomjs* is installed and then eihter run manually

<code>
	phantomjs app-test/run-jasmine.js run-tests.html
</code>
or/and copy *.git/hooks/pre-commit* into your project and let the hook run the tests


And to to run with JUnitXmlReporter (e.g for Jenkins integration):
<code>
    app-test/lib/phantomjs.runner.sh run-tests.html
</code>