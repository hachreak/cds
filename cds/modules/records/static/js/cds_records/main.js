/*
 * This file is part of Invenio.
 * Copyright (C) 2016 CERN.
 *
 * Invenio is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * Invenio is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Invenio; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.

* In applying this license, CERN does not
* waive the privileges and immunities granted to it by virtue of its status
* as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

require([
    'node_modules/angular-loading-bar/build/loading-bar',
    'node_modules/cds/dist/cds',
    'node_modules/ng-dialog/js/ngDialog',
  ], function() {
    // Bootstrap modules
    angular.element(document).ready(function() {
      angular.bootstrap(
        document.getElementById("cds-record"), [
         'angular-loading-bar', 'cdsRecord', 'ngDialog'
        ]
      );
    });
});
