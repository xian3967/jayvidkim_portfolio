/*
(function($) {
    $.ajax({
      type: "GET",
      url: "/content/dam/au-com/extlib/iphone/csv/data/ols-arrival.csv",
      dataType: "text",
      success: function(data) {
        csvJSON(data);
      }
    });

    function csvJSON(csv) {
      let lines = hankaku2Zenkaku(csv).split(/\r\n|\n|\r/);
      let result = [];
      let date = lines[0].split(",");
      let currentDate = date[0];
      let headers = lines[1].split(",");
      for (let i = 2; i < lines.length; i++) {
        let obj = {};
        let currentline = lines[i].split(",");
        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }
        result.push(obj);
      }
      const groupBy = (keys) => (array) =>
        array.reduce((objectsByKeyValue, obj) => {
          keys.reduce((builder, key, index) => {
            if (index !== keys.length - 1) {
              builder[obj[key]] = builder[obj[key]] || {};
            } else {
              builder[obj[key]] = (builder[obj[key]] || []).concat(obj);
            }
            return builder[obj[key]];
          }, objectsByKeyValue);
          return objectsByKeyValue;
        }, {});

      function hankaku2Zenkaku(str) {
        return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
          return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
      }
      let csvJsonString = JSON.stringify(groupBy(['model', 'capacity'])(result), null, 2);
      let csvJson = JSON.parse(csvJsonString);
      changeEvent(csvJson, currentDate);
      makeModelList(csvJson, currentDate);
      addDate(csvJson, currentDate);
    }

    function makeModelList(csvJson, currentDate) {
      for (let i = 0; i < Object.keys(csvJson).length; i++) {
        if (Object.keys(csvJson)[i] !== 'undefined') {
          $('#search-select-model').append('<option value="' + Object.keys(csvJson)[i] + '" class="search-select-model-option">' + Object.keys(csvJson)[i] + '</option>');
        }
      }
    }

    function addDate(csvJson, currentDate) {
      $('#ols-pulldown-date').html(currentDate);
    }

    function changeEvent(csvJson, currentDate) {
      $('#search-select-model').on('change', function() {
        let modelValue = $('#search-select-model option:selected').val();
        $('.search-select-capacity-option').remove();
        $('#ols-pulldown-button').addClass('disabled');
        if (modelValue === '') {
          $('.ols-pulldown__capacity').addClass('not-selected');
        } else {
          $('.ols-pulldown__capacity').removeClass('not-selected');
          for (let i = 0; i < Object.keys(csvJson[modelValue]).length; i++) {
            $('#search-select-capacity').append('<option value="' + Object.keys(csvJson[modelValue])[i] + '" class="search-select-capacity-option">' + Object.keys(csvJson[modelValue])[i] + '</option>');
          }
        }
      });
      $('#search-select-capacity').on('change', function() {
        let capacityValue = $('#search-select-capacity option:selected').val();
        if (capacityValue === '') {
          $('#ols-pulldown-button').addClass('disabled');
        } else {
          $('#ols-pulldown-button').removeClass('disabled');
        }
      });
      $('#ols-pulldown-button').on('click', function() {
        let modelValue = $('#search-select-model option:selected').val();
        let capacityValue = $('#search-select-capacity option:selected').val();
        let targetJson = csvJson[modelValue][capacityValue];
        $('.ols-pulldown-table-wrap').remove();
        $('.cmp-au-com-au-layoutcontainer__footer').addClass('table-showing');
        for (let i = 0; i < targetJson.length; i++) {
          if (jQuery.isEmptyObject(targetJson[i]["reservation1"]) === false) {
            let table = [
              '<div class="ols-pulldown-table-wrap">',
              '<div class="heading title cmp-au-com-title__font__large"><div class="cmp-au-com-title  margin-t-60 margin-t-sp-30 margin-b-20 margin-b-sp-10 margin-r-0 margin-r-sp-0 margin-l-0 margin-l-sp-0">',
              '<h3 class="cmp-au-com-title__text">' + targetJson[i]["name"] + '</h3>',
              '</div></div>',
              '<table class="tableElem">',
              '<thead>',
              '<tr class="table-row">',
              '<th class="bgColor-lightGray">ご予約日</th>',
              '<td class="bgColor-lightGray">入荷目安</td>',
              '</tr>',
              '</thead>',
              '<tbody class="ols-pulldown-table-list_' + i + '">',
              '<tr class="table-row">',
              '<th>' + targetJson[i]["reservation1"] + '</th>',
              '<td>' + targetJson[i]["arrival1"] + '</td>',
              '</tr>',
              '</tbody>',
              '</table>',
              '</div>'
            ].join("");
            $('#ols-pulldown-table').append(table);
            if (jQuery.isEmptyObject(targetJson[i]["reservation2"]) === false) {
              $('.ols-pulldown-table-list_' + i).append('<tr class="table-row"><th>' + targetJson[i]["reservation2"] + '</th><td>' + targetJson[i]["arrival2"] + '</td></tr>');
            }
            if (jQuery.isEmptyObject(targetJson[i]["reservation3"]) === false) {
              $('.ols-pulldown-table-list_' + i).append('<tr class="table-row"><th>' + targetJson[i]["reservation3"] + '</th><td>' + targetJson[i]["arrival3"] + '</td></tr>');
            }
          }
        }
      });
    }
  })(jQuery);


//session//
  (function() {
    if (sessionStorage.getItem('cartMessage') == null) {
      document.querySelector('#cart_Message_localstorage').style.display = 'block';
    } else {
      document.querySelector('#cart_Message_localstorage').style.display = 'none';
    }
    setTimeout(function() {
      document.querySelector('#cart_Message').classList.add('cart_message_fadeout');
      if (sessionStorage.getItem('cartMessage') == null) {
        sessionStorage.setItem('cartMessage', 'saved');
      }
    }, 18000);
    setTimeout(function() {
      document.querySelector('#cart_Message_Box').style.display = 'none';
    }, 18500);
  })();

  //
  (function($) {
  //機種のコード化
  var deviceChange = {
    'iPhone 14': 'iph14',
    'iPhone 14 Plus': 'iph14pl',
    'iPhone 14 Pro': 'iph14p',
    'iPhone 14 Pro Max': 'iph14pm',
    'iPhone 13 Pro': 'iph13p',
    'iPhone 13 Pro Max': 'iph13pm',
    'iPhone 13': 'iph13',
    'iPhone 13 mini': 'iph13m',
    'iPhone 12 Pro': 'iph12p',
    'iPhone 12 Pro Max': 'iph12pm',
    'iPhone 12': 'iph12',
    'iPhone 12 mini': 'iph12m',
    'iPhone SE (第2世代)': 'iphse',
    'iPhone SE (第3世代)': 'iphse3'
  }

  //変数を先に宣言
  var deviceName;
  var capacity;
  var color;

  //クリックイベント
  $('.cmp-au-com-form-product-options__label').on('click', function() {
    if ($(this).find('input').attr('name') === 'device') {
      var deviceText = $(this).find('input').data('text');
      deviceName = deviceChange[deviceText];
      $('.cmp-au-com-form-product-options__label.checked input').each(function() {
        if ($(this).attr('name') === 'capacity') {
          capacity = $(this).data('cmp-selector-value');
        }
      });
    } else if ($(this).find('input').attr('name') === 'capacity') {
      capacity = $(this).find('input').data('cmp-selector-value');
      $('.cmp-au-com-form-product-options__label.checked input').each(function() {
        if ($(this).attr('name') === 'device') {
          var deviceText = $(this).data('text');
          deviceName = deviceChange[deviceText];
        }
      });
    }
    $('.js-product-color-selector .product-color-list .val-color-selector').each(function() {
      if ($(this).hasClass('active')) {
        var rgbColor = $(this).children('span').css('background-color');
        color = changeToColorCode(rgbColor);
      }
    });
    ChangeParameter('itemCode', getProductCode(deviceName, color, capacity));
  });

  $('.js-product-color-selector .product-color-list .val-color-selector').on('click', function() {
    var rgbColor = $(this).children('span').css('background-color');
    color = changeToColorCode(rgbColor);
    $('.cmp-au-com-form-product-options__label.checked input').each(function() {
      if ($(this).attr('name') === 'device') {
        var deviceText = $(this).data('text');
        deviceName = deviceChange[deviceText];
      } else if ($(this).attr('name') === 'capacity') {
        capacity = $(this).data('cmp-selector-value');
      }
    });
    ChangeParameter('itemCode', getProductCode(deviceName, color, capacity));
  });

  //プロダクトコードを受ける関数
  function getProductCode(deviceName, color, capacity) {
    var getDevice = items.device[deviceName].variation;
    var getObject = getDevice.filter(function(item) {
      return item["color"] == color && item["capacity"] == capacity
    });
    return getObject[0]['productCode'];
  }

  //パラメータ変更関数
  function ChangeParameter(key, value) {
    $('.aoitori_iphone_link').each(function() {
      var targetElement = $(this);
      var uri = targetElement.attr('href');
      if ($(this).hasClass('aoitori_iphone_link-not-login')) {
        var re = new RegExp("([%3F%26])" + key + "%3D.*?(%26|$)", "i");
        var separator = uri.indexOf('%3F') !== -1 ? "%26" : "%3F";
        if (uri.match(re)) {
          uri = uri.replace(re, '$1' + key + "%3D" + value + '$2');
        } else {
          uri = uri + separator + key + "%3D" + value;
        }
      } else if ($(this).hasClass('aoitori_iphone_link-login')) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
          uri = uri.replace(re, '$1' + key + "=" + value + '$2');
        } else {
          uri = uri + separator + key + "=" + value;
        }
      }
      targetElement.attr('href', uri);
    });
  }

  //カラーコード値を受ける関数
  function changeToColorCode(color) {
    var rgb = color.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
    return (rgb && rgb.length === 4) ?
      ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : color;
  }
  //最初の表示
  function firstResponse() {
    $('.cmp-au-com-form-product-options__label.checked input').each(function() {
      if ($(this).attr('name') === 'device') {
        var deviceText = $(this).data('text');
        deviceName = deviceChange[deviceText];
      } else if ($(this).attr('name') === 'capacity') {
        capacity = $(this).data('cmp-selector-value');
      }
    });
    $('.js-product-color-selector .product-color-list .val-color-selector').each(function() {
      if ($(this).hasClass('active')) {
        var rgbColor = $(this).children('span').css('background-color');
        color = changeToColorCode(rgbColor);
      }
    });
    ChangeParameter('itemCode', getProductCode(deviceName, color, capacity));
  }
  $(document).ready(function(){
    firstResponse();
  });
  $(window).load(function() {
    firstResponse();
  });
})(jQuery);


(function($) {
    function setCookie(name,value,days) {
      var expires = "";
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days*24*60*60*1000));
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    var queryParameter = $(location).attr('search');
    if (queryParameter) {
      var rawParams = queryParameter.split('&');
      if (!rawParams) {
        rawParams = queryParameter.split('?');
      }
      rawParams[0] = rawParams[0].replace('?', '');
      var params = {};
      rawParams.forEach(function(prm, i) {
        var kv = prm.split('=');
        params[kv[0]] = kv[1];
      });

      if (params['product']) {
        var productParameter = params['product'];
        setCookie('product_list_filter_smartphone0', 'model%2C%2C' + productParameter, 30);
      }
    }

  })(jQuery);




//
 // \assets
//sass --watch --sourcemap=none sass\style.scss:css\style.css

*/