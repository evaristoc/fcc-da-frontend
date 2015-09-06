angular.module('fccDaFrontEndApp')
  .directive('d3Directive', ['$resource','d3Service', function($resource, d3Service) {
    return {
      restrict: 'EA',
      scope: {},
      link: function(scope, elem, attrs) {
        d3Service.d3().then(function(d3) {
          //data = [{
          //  'bot': 0,
          //  'day': '2014-12-30',
          //  'hum': 287,
          //  'hum_bot': 287
          //}, {
          //  'bot': 0,
          //  'day': '2014-12-31',
          //  'hum': 157,
          //  'hum_bot': 157
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-01',
          //  'hum': 83,
          //  'hum_bot': 83
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-02',
          //  'hum': 475,
          //  'hum_bot': 475
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-03',
          //  'hum': 138,
          //  'hum_bot': 138
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-04',
          //  'hum': 90,
          //  'hum_bot': 90
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-05',
          //  'hum': 265,
          //  'hum_bot': 265
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-06',
          //  'hum': 341,
          //  'hum_bot': 341
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-07',
          //  'hum': 291,
          //  'hum_bot': 291
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-08',
          //  'hum': 411,
          //  'hum_bot': 411
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-09',
          //  'hum': 130,
          //  'hum_bot': 130
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-10',
          //  'hum': 145,
          //  'hum_bot': 145
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-11',
          //  'hum': 306,
          //  'hum_bot': 306
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-12',
          //  'hum': 157,
          //  'hum_bot': 157
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-13',
          //  'hum': 288,
          //  'hum_bot': 288
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-14',
          //  'hum': 74,
          //  'hum_bot': 74
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-15',
          //  'hum': 76,
          //  'hum_bot': 76
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-16',
          //  'hum': 57,
          //  'hum_bot': 57
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-17',
          //  'hum': 67,
          //  'hum_bot': 67
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-18',
          //  'hum': 275,
          //  'hum_bot': 275
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-19',
          //  'hum': 162,
          //  'hum_bot': 162
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-20',
          //  'hum': 34,
          //  'hum_bot': 34
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-21',
          //  'hum': 133,
          //  'hum_bot': 133
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-22',
          //  'hum': 353,
          //  'hum_bot': 353
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-23',
          //  'hum': 67,
          //  'hum_bot': 67
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-24',
          //  'hum': 32,
          //  'hum_bot': 32
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-25',
          //  'hum': 32,
          //  'hum_bot': 32
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-26',
          //  'hum': 47,
          //  'hum_bot': 47
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-27',
          //  'hum': 90,
          //  'hum_bot': 90
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-28',
          //  'hum': 3,
          //  'hum_bot': 3
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-29',
          //  'hum': 111,
          //  'hum_bot': 111
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-30',
          //  'hum': 176,
          //  'hum_bot': 176
          //}, {
          //  'bot': 0,
          //  'day': '2015-01-31',
          //  'hum': 213,
          //  'hum_bot': 213
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-01',
          //  'hum': 9,
          //  'hum_bot': 9
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-02',
          //  'hum': 211,
          //  'hum_bot': 211
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-03',
          //  'hum': 135,
          //  'hum_bot': 135
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-04',
          //  'hum': 143,
          //  'hum_bot': 143
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-05',
          //  'hum': 96,
          //  'hum_bot': 96
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-06',
          //  'hum': 126,
          //  'hum_bot': 126
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-07',
          //  'hum': 216,
          //  'hum_bot': 216
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-08',
          //  'hum': 31,
          //  'hum_bot': 31
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-09',
          //  'hum': 90,
          //  'hum_bot': 90
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-10',
          //  'hum': 175,
          //  'hum_bot': 175
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-11',
          //  'hum': 177,
          //  'hum_bot': 177
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-12',
          //  'hum': 302,
          //  'hum_bot': 302
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-13',
          //  'hum': 258,
          //  'hum_bot': 258
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-14',
          //  'hum': 387,
          //  'hum_bot': 387
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-15',
          //  'hum': 104,
          //  'hum_bot': 104
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-16',
          //  'hum': 223,
          //  'hum_bot': 223
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-17',
          //  'hum': 307,
          //  'hum_bot': 307
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-18',
          //  'hum': 666,
          //  'hum_bot': 666
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-19',
          //  'hum': 169,
          //  'hum_bot': 169
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-20',
          //  'hum': 265,
          //  'hum_bot': 265
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-21',
          //  'hum': 91,
          //  'hum_bot': 91
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-22',
          //  'hum': 162,
          //  'hum_bot': 162
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-23',
          //  'hum': 145,
          //  'hum_bot': 145
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-24',
          //  'hum': 344,
          //  'hum_bot': 344
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-25',
          //  'hum': 465,
          //  'hum_bot': 465
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-26',
          //  'hum': 128,
          //  'hum_bot': 128
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-27',
          //  'hum': 430,
          //  'hum_bot': 430
          //}, {
          //  'bot': 0,
          //  'day': '2015-02-28',
          //  'hum': 685,
          //  'hum_bot': 685
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-01',
          //  'hum': 183,
          //  'hum_bot': 183
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-02',
          //  'hum': 161,
          //  'hum_bot': 161
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-03',
          //  'hum': 516,
          //  'hum_bot': 516
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-04',
          //  'hum': 419,
          //  'hum_bot': 419
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-05',
          //  'hum': 720,
          //  'hum_bot': 720
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-06',
          //  'hum': 238,
          //  'hum_bot': 238
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-07',
          //  'hum': 401,
          //  'hum_bot': 401
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-08',
          //  'hum': 134,
          //  'hum_bot': 134
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-09',
          //  'hum': 106,
          //  'hum_bot': 106
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-10',
          //  'hum': 240,
          //  'hum_bot': 240
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-11',
          //  'hum': 148,
          //  'hum_bot': 148
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-12',
          //  'hum': 271,
          //  'hum_bot': 271
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-13',
          //  'hum': 144,
          //  'hum_bot': 144
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-14',
          //  'hum': 87,
          //  'hum_bot': 87
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-15',
          //  'hum': 21,
          //  'hum_bot': 21
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-16',
          //  'hum': 86,
          //  'hum_bot': 86
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-17',
          //  'hum': 156,
          //  'hum_bot': 156
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-18',
          //  'hum': 59,
          //  'hum_bot': 59
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-19',
          //  'hum': 91,
          //  'hum_bot': 91
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-20',
          //  'hum': 29,
          //  'hum_bot': 29
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-21',
          //  'hum': 32,
          //  'hum_bot': 32
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-22',
          //  'hum': 44,
          //  'hum_bot': 44
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-23',
          //  'hum': 203,
          //  'hum_bot': 203
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-24',
          //  'hum': 96,
          //  'hum_bot': 96
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-25',
          //  'hum': 23,
          //  'hum_bot': 23
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-26',
          //  'hum': 97,
          //  'hum_bot': 97
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-27',
          //  'hum': 26,
          //  'hum_bot': 26
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-28',
          //  'hum': 94,
          //  'hum_bot': 94
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-29',
          //  'hum': 61,
          //  'hum_bot': 61
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-30',
          //  'hum': 46,
          //  'hum_bot': 46
          //}, {
          //  'bot': 0,
          //  'day': '2015-03-31',
          //  'hum': 43,
          //  'hum_bot': 43
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-01',
          //  'hum': 71,
          //  'hum_bot': 71
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-02',
          //  'hum': 33,
          //  'hum_bot': 33
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-03',
          //  'hum': 55,
          //  'hum_bot': 55
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-04',
          //  'hum': 46,
          //  'hum_bot': 46
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-05',
          //  'hum': 192,
          //  'hum_bot': 192
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-06',
          //  'hum': 111,
          //  'hum_bot': 111
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-07',
          //  'hum': 251,
          //  'hum_bot': 251
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-08',
          //  'hum': 64,
          //  'hum_bot': 64
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-09',
          //  'hum': 70,
          //  'hum_bot': 70
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-10',
          //  'hum': 12,
          //  'hum_bot': 12
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-11',
          //  'hum': 2,
          //  'hum_bot': 2
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-14',
          //  'hum': 1,
          //  'hum_bot': 1
          //}, {
          //  'bot': 0,
          //  'day': '2015-04-22',
          //  'hum': 2,
          //  'hum_bot': 2
          //}, {
          //  'bot': 0,
          //  'day': '2015-05-01',
          //  'hum': 1,
          //  'hum_bot': 1
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-09',
          //  'hum': 2,
          //  'hum_bot': 2
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-15',
          //  'hum': 123,
          //  'hum_bot': 1
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-19',
          //  'hum': 2,
          //  'hum_bot': 2
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-21',
          //  'hum': 497,
          //  'hum_bot': 497
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-22',
          //  'hum': 658,
          //  'hum_bot': 658
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-23',
          //  'hum': 567,
          //  'hum_bot': 567
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-24',
          //  'hum': 699,
          //  'hum_bot': 699
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-25',
          //  'hum': 816,
          //  'hum_bot': 816
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-26',
          //  'hum': 533,
          //  'hum_bot': 533
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-27',
          //  'hum': 481,
          //  'hum_bot': 481
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-28',
          //  'hum': 807,
          //  'hum_bot': 807
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-29',
          //  'hum': 830,
          //  'hum_bot': 830
          //}, {
          //  'bot': 0,
          //  'day': '2015-06-30',
          //  'hum': 661,
          //  'hum_bot': 661
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-01',
          //  'hum': 818,
          //  'hum_bot': 818
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-02',
          //  'hum': 962,
          //  'hum_bot': 962
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-03',
          //  'hum': 1295,
          //  'hum_bot': 1295
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-04',
          //  'hum': 783,
          //  'hum_bot': 783
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-05',
          //  'hum': 449,
          //  'hum_bot': 449
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-06',
          //  'hum': 654,
          //  'hum_bot': 654
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-07',
          //  'hum': 526,
          //  'hum_bot': 526
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-08',
          //  'hum': 805,
          //  'hum_bot': 805
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-09',
          //  'hum': 545,
          //  'hum_bot': 545
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-10',
          //  'hum': 1036,
          //  'hum_bot': 1036
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-11',
          //  'hum': 948,
          //  'hum_bot': 948
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-12',
          //  'hum': 992,
          //  'hum_bot': 992
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-13',
          //  'hum': 1162,
          //  'hum_bot': 1162
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-14',
          //  'hum': 1464,
          //  'hum_bot': 1464
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-15',
          //  'hum': 1815,
          //  'hum_bot': 1815
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-16',
          //  'hum': 1164,
          //  'hum_bot': 1164
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-17',
          //  'hum': 1201,
          //  'hum_bot': 1201
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-18',
          //  'hum': 1050,
          //  'hum_bot': 1050
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-19',
          //  'hum': 1439,
          //  'hum_bot': 1439
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-20',
          //  'hum': 1180,
          //  'hum_bot': 1180
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-21',
          //  'hum': 1272,
          //  'hum_bot': 1272
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-22',
          //  'hum': 1620,
          //  'hum_bot': 1620
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-23',
          //  'hum': 1937,
          //  'hum_bot': 1937
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-24',
          //  'hum': 1439,
          //  'hum_bot': 1439
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-25',
          //  'hum': 828,
          //  'hum_bot': 828
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-26',
          //  'hum': 1264,
          //  'hum_bot': 1264
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-27',
          //  'hum': 1018,
          //  'hum_bot': 1018
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-28',
          //  'hum': 1010,
          //  'hum_bot': 1010
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-29',
          //  'hum': 873,
          //  'hum_bot': 873
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-30',
          //  'hum': 848,
          //  'hum_bot': 848
          //}, {
          //  'bot': 0,
          //  'day': '2015-07-31',
          //  'hum': 885,
          //  'hum_bot': 885
          //}, {
          //  'bot': 0,
          //  'day': '2015-08-01',
          //  'hum': 953,
          //  'hum_bot': 953
          //}, {
          //  'bot': 0,
          //  'day': '2015-08-02',
          //  'hum': 984,
          //  'hum_bot': 984
          //}, {
          //  'bot': 128,
          //  'day': '2015-08-03',
          //  'hum': 1218,
          //  'hum_bot': 1346
          //}, {
          //  'bot': 178,
          //  'day': '2015-08-04',
          //  'hum': 1720,
          //  'hum_bot': 1898
          //}, {
          //  'bot': 153,
          //  'day': '2015-08-05',
          //  'hum': 1529,
          //  'hum_bot': 1682
          //}, {
          //  'bot': 63,
          //  'day': '2015-08-06',
          //  'hum': 982,
          //  'hum_bot': 1045
          //}, {
          //  'bot': 74,
          //  'day': '2015-08-07',
          //  'hum': 1529,
          //  'hum_bot': 1603
          //}, {
          //  'bot': 88,
          //  'day': '2015-08-08',
          //  'hum': 1243,
          //  'hum_bot': 1331
          //}, {
          //  'bot': 36,
          //  'day': '2015-08-09',
          //  'hum': 793,
          //  'hum_bot': 829
          //}, {
          //  'bot': 62,
          //  'day': '2015-08-10',
          //  'hum': 1366,
          //  'hum_bot': 1428
          //}, {
          //  'bot': 56,
          //  'day': '2015-08-11',
          //  'hum': 926,
          //  'hum_bot': 982
          //}, {
          //  'bot': 74,
          //  'day': '2015-08-12',
          //  'hum': 866,
          //  'hum_bot': 940
          //}, {
          //  'bot': 64,
          //  'day': '2015-08-13',
          //  'hum': 1073,
          //  'hum_bot': 1137
          //}, {
          //  'bot': 35,
          //  'day': '2015-08-14',
          //  'hum': 852,
          //  'hum_bot': 887
          //}, {
          //  'bot': 57,
          //  'day': '2015-08-15',
          //  'hum': 582,
          //  'hum_bot': 639
          //}, {
          //  'bot': 77,
          //  'day': '2015-08-16',
          //  'hum': 473,
          //  'hum_bot': 550
          //}];

          // based on http://bl.ocks.org/d3noob/b3ff6ae1c120eea654b5
          // based on http://stackoverflow.com/questions/8301531/dealing-with-dates-on-d3-js-axis
          // based on http://codepen.io/sandeepguggu/pen/bnwos
          // Set the dimensions of the canvas / graph
          var margin = {
              top: 30,
              right: 20,
              bottom: 30,
              left: 50
            },
            width = 600 - margin.left - margin.right,
            height = 270 - margin.top - margin.bottom;

          // helper function
          function getDate(d) {
            return new Date(d);
          }

          // Parse the date / time
          var parseDate = d3.time.format("%y-%b-%d").parse;
          
          //dataService.data().then(function(data){console.log('IN ANGULAR ',data)});
          console.log('Before dataService call...');
          //http://stackoverflow.com/questions/20584367/how-to-handle-resource-service-errors-in-angularjs
          var Resource = $resource('/data',{},{isArray:true});
          Resource.query().$promise.then(function(totaldata) {
          // success handler
          console.log(totaldata);
          var predata = totaldata[0];
          console.log(typeof predata);
          
          var data = [];
          var k_objects = Object.keys(predata);
          for (var k = 0; k < k_objects.length; k++){
            if (Object.prototype.hasOwnProperty.call(predata, k_objects[k])) {
        //    console.log(Object.prototype.hasOwnProperty.call(result_mapred, k_objects[k]))
        //    console.log({day:k_objects[k], hum:result_mapred[k_objects[k]].hum, bot:result_mapred[k_objects[k]].bot})
              data.push({day:k_objects[k], hum:predata[k_objects[k]].hum, bot:predata[k_objects[k]].bot})
            }
          }
          console.log(data);
          //var days = data.keys;
          //console.log(days);
          // Set the ranges
          var minDate = getDate(data[0].day),
            maxDate = getDate(data[data.length - 1].day);
          console.log(minDate, maxDate);
          //var x = d3.scale.linear().range([0, width]);
          var x = d3.time.scale().range([0, width]);
          var y = d3.scale.linear().range([height, 0]);
          
          // Define the axes
          var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(5);
          
          var yAxis = d3.svg.axis().scale(y)
            .orient("left").ticks(5);
          
          // Define the line
          var valueline = d3.svg.line()
            .x(function(d) {
              return x(getDate(d.day));
            })
            .y(function(d) {
              return y(d.hum);
            });
          
          // Adds the svg canvas
          var svg = d3.select(elem[0]) //select where directive was added
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
          
          var h = [];
          // day
          data.forEach(function(e, i, a) {
            d = parseDate(e.day);
            h.push(e.hum);
          });
          
          // Scale the range of the data
          
          x.domain([minDate, maxDate]).range([0, width]);
          y.domain([0, d3.max(h, function(d) {
            return d;
          })]);
          
          // Add the valueline path.
          svg.append("path")
            .attr("class", "line")
            .attr("d", valueline(data));
          
          // Add the X Axis
          svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
          
          // Add the Y Axis
          svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
          }, function(error) {
          // error handler
          console.log("$resouce call got an ERROR");
          });
          //console.log(dataService);
          //(function(d){console.log(d); $rootScope.data = d;});
          //console.log(dataService.data());
          //// Set the ranges
          //var minDate = getDate(data[0].day),
          //  maxDate = getDate(data[data.length - 1].day);
          //console.log(minDate, maxDate);
          ////var x = d3.scale.linear().range([0, width]);
          //var x = d3.time.scale().range([0, width]);
          //var y = d3.scale.linear().range([height, 0]);
          //
          //// Define the axes
          //var xAxis = d3.svg.axis().scale(x)
          //  .orient("bottom").ticks(5);
          //
          //var yAxis = d3.svg.axis().scale(y)
          //  .orient("left").ticks(5);
          //
          //// Define the line
          //var valueline = d3.svg.line()
          //  .x(function(d) {
          //    return x(getDate(d.day));
          //  })
          //  .y(function(d) {
          //    return y(d.hum);
          //  });
          //
          //// Adds the svg canvas
          //var svg = d3.select(elem[0]) //select where directive was added
          //  .append("svg")
          //  .attr("width", width + margin.left + margin.right)
          //  .attr("height", height + margin.top + margin.bottom)
          //  .append("g")
          //  .attr("transform",
          //    "translate(" + margin.left + "," + margin.top + ")");
          //
          //var h = [];
          //// day
          //data.forEach(function(e, i, a) {
          //  d = parseDate(e.day);
          //  h.push(e.hum);
          //});
          //
          //// Scale the range of the data
          //
          //x.domain([minDate, maxDate]).range([0, width]);
          //y.domain([0, d3.max(h, function(d) {
          //  return d;
          //})]);
          //
          //// Add the valueline path.
          //svg.append("path")
          //  .attr("class", "line")
          //  .attr("d", valueline(data));
          //
          //// Add the X Axis
          //svg.append("g")
          //  .attr("class", "x axis")
          //  .attr("transform", "translate(0," + height + ")")
          //  .call(xAxis);
          //
          //// Add the Y Axis
          //svg.append("g")
          //  .attr("class", "y axis")
          //  .call(yAxis);


        });
      }
    }
  }]);
