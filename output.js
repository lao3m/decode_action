//Mon Aug 03 2026 06:08:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!function (_0x1360a6, _0x432351) {
  function _0xb3954d() {
    return /SM-F9|SM-W202|SM-W90/i.test(navigator.userAgent);
  }
  function _0x5ce772() {
    _0x2225e4 && (publicClient.showLoadPlug(), $(".btn-container-sty").addClass("hidden"), $(".buttonShowAddText").addClass("buttonShowAddText-text-color"), $(".recharge-btn").removeClass("recharge-btn-color"), $(".recharge-btn > .recharge-shadow").addClass("hidden"), recharge_H5module_inner.getLocal({
      type: "get",
      userInfo: _0x26ca50,
      reqBody: {
        cellNum: _0x2225e4
      },
      success: function (_0x1360a6) {
        if (publicClient.closeLoadPlug(), "000000" == _0x1360a6.retCode) {
          var _0x432351 = new Date("2018/01/02 19:00:00").getTime();
          var _0xb3954d = new Date("2018/01/04 09:00:00").getTime();
          var _0x5ce772 = new Date().getTime();
          if (_0x1360a6.data = _0x1360a6.data || {}, _0x1360a6.data.prov_cd) {
            if ("971" == _0x1360a6.data.prov_cd && _0x5ce772 >= _0x432351 && _0x5ce772 <= _0xb3954d) {
              _0x2225e4 = null;
              var _0x4bccd3 = publicClient.showProName(_0x1360a6.data.prov_cd);
              $(".address-name").html(_0x4bccd3 + "移动").addClass("addActive");
              _0x3654e7();
            } else {
              var _0x4bccd3 = publicClient.showProName(_0x1360a6.data.prov_cd);
              _0x56d11a = _0x1360a6.data.prov_cd;
              _0x492738 = _0x1360a6.data.cityCode;
              $(".address-name").removeClass("lightBlue").addClass("addActive").html(_0x4bccd3 + "移动");
              _0x2bc617($(".tel-input").val());
              _0x112757();
              var _0x428df6 = new Date(2026, 5, 30, 23, 0, 0);
              if (new Date() < _0x428df6) {
                return void setTimeout(function () {
                  _0x37f002();
                }, 1000);
              }
            }
          } else {
            _0x2225e4 = null;
            $(".address-name").html(" 仅支持中国移动号码充值").removeClass("addActive").addClass("lightBlue");
            publicClient.toastPlug("仅支持中国移动号码充值，请致电10086核实号码信息", 2000);
          }
        } else {
          "700001" == _0x1360a6.retCode ? (_0x2225e4 = null, $(".address-name").html("仅支持移动号码充值").removeClass("addActive").addClass("lightBlue"), publicClient.toastPlug("仅支持移动号码充值，请确认号码是否为移动号码！", 2000), _0x26a397()) : (_0x2225e4 = null, "999999" == _0x1360a6.retCode && (_0x1360a6.retMsg = "号码格式错误，请重新输入"), publicClient.sessionFailurePrompt(_0x1360a6), _0x26a397());
        }
        $(".tel-input").blur();
      },
      error: function (_0x1360a6) {
        _0x26a397();
        publicClient.closeLoadPlug();
      }
    }));
  }
  function _0x13ad6e(_0x1360a6) {
    recharge_H5module_inner.getTopOperation({
      type: "get",
      userInfo: _0x26ca50,
      reqBody: {
        cellNum: _0x2225e4,
        channel: "11",
        provCode: _0x1360a6,
        optId: "44"
      },
      success: function (_0x1360a6) {
        var _0x432351 = _0x1360a6 && _0x1360a6.data && _0x1360a6.data.optInfoList;
        _0x432351 && _0x432351.map(function (_0x1360a6) {
          if ("041100" == _0x1360a6.areaID) {
            var _0x432351 = _0x1360a6.optItems;
            _0x432351 && _0x432351.map(function (_0x1360a6) {
              "44" == _0x1360a6.optID && _0x1360a6.picItems && _0x1360a6.picItems[0] && ($(".isClose-box").children().removeClass("hidden"), $("#dynamicOpertainImg").attr("src", _0x1360a6.picItems[0] && _0x1360a6.picItems[0].picUrl), $("#dynamicOpertainTxt").text(_0x1360a6.picItems[0] && _0x1360a6.picItems[0].picTag), $(".isClose-box").off("fastClick"), $(".isClose-box").fastClick(function () {
                var _0x432351 = _0x1360a6.picItems[0] && _0x1360a6.picItems[0].linkUrl;
                publicClient.setGdpTrace({}, "clk", {
                  WT_area_type_1: "楼层",
                  WT_area_name: "号码输入框",
                  XY_env_type: "button",
                  WT_envName: "家人充",
                  WT_event: "P00000051687",
                  WT_next_url: _0x432351
                });
                _0x4b93d3(_0x432351);
              }));
            });
          }
          _0x57ee71(_0x1360a6, "041101", ".footer-box > .order");
          _0x57ee71(_0x1360a6, "041102", ".footer-box > .drawInvoice");
        });
        $(".footer-box > .order").html() || $(".footer-box > .order").remove();
        $(".footer-box > .drawInvoice").html() || $(".footer-box > .drawInvoice").remove();
      },
      error: function (_0x1360a6) {}
    });
  }
  function _0x57ee71(_0x1360a6, _0x432351, _0xb3954d) {
    var _0x5ce772 = {
      ".footer-box > .order": "footer-label-left",
      ".footer-box > .drawInvoice": "footer-label"
    };
    if (_0x1360a6.areaID == _0x432351) {
      var _0x13ad6e = _0x1360a6.optItems;
      _0x13ad6e && _0x13ad6e.map(function (_0x1360a6) {
        "44" == _0x1360a6.optID && _0x1360a6.picItems && _0x1360a6.picItems[0] && (_0x1360a6.picItems[0].picTag ? ($(_0xb3954d).attr("jump-url", _0x1360a6.picItems[0].linkUrl), _0x1360a6.picItems[0].eventDesc && ($(_0xb3954d).addClass(_0x5ce772[_0xb3954d]), $(_0xb3954d).attr("data-label", _0x1360a6.picItems[0].eventDesc.substr(0, 3))), $(_0xb3954d).html(_0x1360a6.picItems[0].picTag.substr(0, 4))) : $(_0xb3954d).remove());
      });
    }
  }
  function _0x112757() {
    _0x230e88(_0x56d11a, _0x492738);
    _0x2d1915 || _0x4f7a33();
    _0x2b1164 && _0x2b1164 == _0x2225e4 ? "250" == _0x56d11a && _0x1b0f85() : $("#js-coupons").addClass("hidden");
    $(".benefit-box .benefit-list:visible").last().removeClass("onepx");
  }
  function _0x4f7a33() {
    recharge_H5module_inner.getReminder({
      type: "get",
      userInfo: _0x26ca50,
      reqBody: {
        provCode: _0x56d11a,
        funcCode: "040100"
      },
      success: function (_0x1360a6) {
        if ("000000" == _0x1360a6.retCode && _0x1360a6.data) {
          for (var _0x432351 = "", _0xb3954d = 0; _0xb3954d < _0x1360a6.data.length; _0xb3954d++) {
            "040100" === _0x1360a6.data[_0xb3954d].funcCode && (_0x432351 = _0x1360a6.data[_0xb3954d].tipContent);
          }
          $("#reminder-text").html(_0x432351.trim());
          0 == _0x1360a6.data.length && _0x232a41();
        }
      },
      error: function (_0x1360a6) {
        _0x232a41();
      }
    });
  }
  function _0x232a41() {
    recharge_H5module_inner.getReminder({
      type: "get",
      userInfo: _0x26ca50,
      reqBody: {
        provCode: "99",
        funcCode: "040100"
      },
      success: function (_0x1360a6) {
        if ("000000" == _0x1360a6.retCode && _0x1360a6.data) {
          for (var _0x432351 = "", _0xb3954d = 0; _0xb3954d < _0x1360a6.data.length; _0xb3954d++) {
            "040100" === _0x1360a6.data[_0xb3954d].funcCode && (_0x432351 = _0x1360a6.data[_0xb3954d].tipContent);
          }
          $("#reminder-text").html(_0x432351.trim());
        }
      },
      error: function (_0x1360a6) {}
    });
  }
  function _0xd89ed2(_0x1360a6, _0x432351) {
    "undefined" != typeof recharge_H5module && recharge_H5module.second({
      userInfo: _0x26ca50,
      reqBody: {
        provinceCode: _0x1360a6,
        cityCode: _0x432351,
        cellNum: _0x2b1164,
        location: "22"
      },
      success: function (_0x1360a6) {
        if ("000000" == _0x1360a6.retCode && _0x1360a6.rspBody && _0x1360a6.rspBody.pageList && _0x1360a6.rspBody.pageList[0] && 1 == _0x1360a6.rspBody.pageList[0].isShow) {
          var _0x432351 = _0x1360a6.rspBody.pageList[0];
          var _0xb3954d = [];
          var _0x5ce772 = "";
          _0x432351.ssoUrlAddr && (_0x5ce772 = _0x432351.ssoUrlAddr);
          _0x432351.paramList && (_0xb3954d = _0x432351.paramList);
          cmcc.assistiveControl({
            debug: false,
            id: _0x432351.id,
            iconUrl: _0x432351.iconUrl,
            actionUrl: _0x432351.actionUrl,
            isShare: _0x432351.isShare,
            verifyType: _0x432351.verifyType,
            loginType: _0x432351.loginType,
            isSso: _0x432351.isSso,
            ssoUrlAddr: _0x5ce772,
            location: "22",
            paramList: _0xb3954d,
            success: function (_0x1360a6) {},
            error: function (_0x1360a6) {}
          });
        }
      },
      error: function (_0x1360a6) {}
    });
  }
  function _0x1509b2(_0x1360a6) {
    recharge_H5module_inner.getMaskBoxInfo({
      type: "get",
      userInfo: _0x26ca50,
      reqBody: {
        boxId: _0x1360a6,
        channel: "11",
        cellNum: _0x2b1164
      },
      async: false,
      dataType: "json",
      timeout: 2000,
      success: function (_0x1360a6) {
        "000000" == _0x1360a6.retCode ? (_0x1360a6.data && _0x1360a6.data.boxList ? (_0x3de03c.maskRights = _0x1360a6.data.boxList, _0x56f2a8.map(function (_0x1360a6) {
          _0x1360a6.prods = _0x1360a6.prods || [];
          for (var _0x432351 = 0; _0x432351 < _0x3de03c.maskRights.length; _0x432351++) {
            _0x1360a6.operateId == _0x3de03c.maskRights[_0x432351].ruleId && _0x1360a6.prods.push(_0x3de03c.maskRights[_0x432351]);
          }
        })) : _0x3de03c.maskRights = [], _0x1360a6.data && _0x1360a6.data.orderList && _0x1360a6.data.orderList.length > 0 ? (_0x3de03c.maskOrderStatue = _0x1360a6.data.orderList[0].orderStatus, _0x3de03c.blindOrderInfo = _0x1360a6.data.orderList[0], 0 == _0x3de03c.maskOrderStatue && $(".unpaid-prompt").addClass("hidden")) : _0x3de03c.maskOrderStatue = null) : _0x3de03c.maskRights = [];
        _0x26a397();
      },
      error: function () {
        _0x3de03c.maskRights = [];
        _0x3de03c.maskOrderStatue = null;
        _0x26a397();
      }
    });
  }
  function _0x27340f(_0x1360a6) {
    recharge_H5module_inner.getRightgoodsInfo({
      type: "get",
      userInfo: _0x26ca50,
      reqBody: {
        boxId: _0x1360a6,
        channel: "11",
        cellNum: _0x2b1164
      },
      async: false,
      dataType: "json",
      timeout: 2000,
      success: function (_0x1360a6) {
        if ("000000" == _0x1360a6.retCode) {
          if (_0x1360a6.data && _0x1360a6.data.boxList && _0x1360a6.data.boxList.length == _0x4188e2) {
            _0x1360a6.data.boxList = _0x1360a6.data.boxList && _0x1360a6.data.boxList.map(function (_0x1360a6) {
              var _0x432351 = _0x1360a6.imgCode.split("|");
              _0x1360a6.imgCode = _0x432351[0];
              _0x1360a6.imgLitCode = _0x432351.length > 1 && _0x432351[1];
              return _0x1360a6;
            });
            _0xe5922b.addtionRights = _0x1360a6.data.boxList;
            for (var _0x432351 = [], _0xb3954d = 0; _0xb3954d < _0x2a2d34.length; _0xb3954d++) {
              for (var _0x5ce772 = 0; _0x5ce772 < _0x1360a6.data.boxList.length; _0x5ce772++) {
                if (_0x2a2d34[_0xb3954d].presentCode.split("|")[1] == _0x1360a6.data.boxList[_0x5ce772].skuid) {
                  _0x432351.push(_0x1360a6.data.boxList[_0x5ce772]);
                  break;
                }
              }
            }
            _0xe5922b.addtionRights = _0x432351;
            _0xfe06d3 = true;
          } else {
            _0xe5922b.addtionRights = [];
            _0x56f2a8.length > 0 && _0x1509b2(_0x56f2a8[0].presentCode);
          }
          if (_0x1360a6.data && _0x1360a6.data.orderList) {
            if (_0x1360a6.data.orderList.length > 0) {
              if (_0xe5922b.addtionOrderStatue = _0x1360a6.data.orderList[0].orderStatus, _0xe5922b.addtionOrderInfo = _0x1360a6.data.orderList[0], 0 == _0xe5922b.addtionOrderStatue) {
                $(".unpaid-prompt").addClass("hidden");
              } else {
                if (4 == _0xe5922b.addtionOrderStatue) {
                  for (var _0xb3954d = 0; _0xb3954d < _0xe5922b.addtionRights.length; _0xb3954d++) {
                    if (_0xe5922b.addtionRights[_0xb3954d].skuid == _0xe5922b.addtionOrderInfo.busiCode) {
                      _0xe5922b.addtionOrderInfo.imgSrc = _0xe5922b.addtionRights[_0xb3954d].imgLitCode;
                      break;
                    }
                  }
                }
              }
            } else {
              _0xe5922b.addtionOrderStatue = null;
            }
          } else {
            _0xe5922b.addtionOrderStatue = null;
          }
        } else {
          _0xe5922b.addtionRights = [];
        }
        _0x26a397();
      },
      error: function () {
        _0xe5922b.addtionRights = [];
        _0xe5922b.addtionOrderStatue = null;
        _0x219e0f = false;
        _0x26a397();
      }
    });
  }
  function _0xb9ded1() {
    publicClient.showLoadPlug();
    recharge_H5module_inner.getrightstoreInfo({
      type: "get",
      userInfo: _0x26ca50,
      reqBody: {
        boxId: _0x38715f.boxId,
        channel: "11",
        cellNum: _0x2b1164,
        skuId: _0x38715f.skuid
      },
      async: false,
      dataType: "json",
      timeout: 2000,
      success: function (_0x1360a6) {
        publicClient.closeLoadPlug();
        _0x573a02();
        "000000" == _0x1360a6.retCode ? _0x1360a6.data && _0x1360a6.data.hasGoods ? (_0x4a8f3e = _0x38715f.additionOperateId, _0x5d37ac = _0x38715f.price, _0x3c3c8b = "9", $(".addtionSms .addtionAmount").html(publicClient.floating(Number(_0x5bd53a) + Number(_0x38715f.price))), $(".addtionSms .desc").html(_0xec0045 + "元话费充值和" + _0x38715f.goodsName + "权益"), $(".init-button").removeClass("disable"), $(".addtionSms").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow"), $(".mask-box-box").removeClass("reminder-to-bottom").addClass("reminder-to-top"), publicClient.setGdpTrace({}, "imp", {
          WT_area_type_1: "弹窗",
          WT_envName: "弹出",
          WT_area_name: "加购热门权益_二次确认弹窗"
        })) : publicClient.toastPlug("所选商品库存不足，请选择其他商品购买", 2000) : publicClient.showDialogPlug("系统繁忙，请稍后再试", "知道了");
      },
      error: function () {
        publicClient.closeLoadPlug();
        publicClient.showDialogPlug("系统繁忙，请稍后再试", "知道了");
        _0x573a02();
      }
    });
  }
  function _0x19c473() {
    recharge_H5module_inner.getrightlistInfo({
      type: "get",
      userInfo: _0x26ca50,
      reqBody: {
        channel: "11",
        cellNum: _0x2b1164
      },
      async: false,
      dataType: "json",
      timeout: 2000,
      success: function (_0x1360a6) {
        var _0x432351 = {
          blindRecords: [],
          renderText: "暂无购买记录，快去购买吧~"
        };
        "000000" == _0x1360a6.retCode ? _0x1360a6.data && _0x1360a6.data.length > 0 ? ($(".blindRecord > .blindBoxRecord-dialog").removeClass("blindBoxRecord-dialog-none"), $(".blindBoxRecord-content").removeClass("blindBoxRecord-content-none"), _0x432351.blindRecords = _0x1360a6.data) : ($(".blindRecord > .blindBoxRecord-dialog").addClass("blindBoxRecord-dialog-none"), $(".blindBoxRecord-content").addClass("blindBoxRecord-content-none")) : ($(".blindRecord > .blindBoxRecord-dialog").addClass("blindBoxRecord-dialog-none"), $(".blindBoxRecord-content").addClass("blindBoxRecord-content-none"), _0x432351.renderText = "系统繁忙，如需查询历史购买记录，请去“中国移动APP-权益-我的-我的订单”中查看详细订购记录");
        var _0xb3954d = $("#blindRecordTpl").html();
        juicer.register("getDateym", _0x105087);
        var _0x5ce772 = juicer(_0xb3954d, _0x432351);
        $(".addtion-box-records").html(_0x5ce772);
      },
      error: function () {
        var _0x1360a6 = {
          blindRecords: [],
          renderText: "系统繁忙，如需查询历史购买记录，请去“中国移动APP-权益-我的-我的订单”中查看详细订购记录"
        };
        $(".blindRecord > .blindBoxRecord-dialog").addClass("blindBoxRecord-dialog-none");
        $(".blindBoxRecord-content").addClass("blindBoxRecord-content-none");
        var _0x432351 = $("#blindRecordTpl").html();
        juicer.register("getDateym", _0x105087);
        var _0xb3954d = juicer(_0x432351, _0x1360a6);
        $(".addtion-box-records").html(_0xb3954d);
      }
    });
  }
  function _0x54c559() {
    recharge_H5module_inner.getBlindRecord({
      type: "get",
      userInfo: _0x26ca50,
      reqBody: {
        channel: "11",
        cellNum: _0x2b1164
      },
      async: false,
      dataType: "json",
      timeout: 2000,
      success: function (_0x1360a6) {
        var _0x432351 = {
          blindRecords: [],
          renderText: "暂无购买记录，快去购买吧~"
        };
        "000000" == _0x1360a6.retCode ? _0x1360a6.data && _0x1360a6.data.length > 0 ? ($(".blindRecord > .blindBoxRecord-dialog").removeClass("blindBoxRecord-dialog-none"), $(".blindBoxRecord-content").removeClass("blindBoxRecord-content-none"), _0x432351.blindRecords = _0x1360a6.data) : ($(".blindRecord > .blindBoxRecord-dialog").addClass("blindBoxRecord-dialog-none"), $(".blindBoxRecord-content").addClass("blindBoxRecord-content-none")) : ($(".blindRecord > .blindBoxRecord-dialog").addClass("blindBoxRecord-dialog-none"), $(".blindBoxRecord-content").addClass("blindBoxRecord-content-none"), _0x432351.renderText = "系统繁忙，如需查询历史购买记录，请去“中国移动APP-权益-我的-我的订单”中查看详细订购记录");
        var _0xb3954d = $("#blindRecordTpl").html();
        juicer.register("getDateym", _0x105087);
        var _0x5ce772 = juicer(_0xb3954d, _0x432351);
        $(".blind-box-records").html(_0x5ce772);
      },
      error: function () {
        var _0x1360a6 = {
          blindRecords: [],
          renderText: "系统繁忙，如需查询历史购买记录，请去“中国移动APP-权益-我的-我的订单”中查看详细订购记录"
        };
        $(".blindRecord > .blindBoxRecord-dialog").addClass("blindBoxRecord-dialog-none");
        $(".blindBoxRecord-content").addClass("blindBoxRecord-content-none");
        var _0x432351 = $("#blindRecordTpl").html();
        juicer.register("getDateym", _0x105087);
        var _0xb3954d = juicer(_0x432351, _0x1360a6);
        $(".blind-box-records").html(_0xb3954d);
      }
    });
  }
  function _0x2812f9(_0x1360a6) {
    (_0x24c053 && _0x24c053.filter(function (_0x1360a6) {
      return 0 != Object.keys(_0x1360a6).length;
    }) || []).length > 0 ? _0x34129f() : _0x2225e4 == _0x2b1164 && recharge_H5module_inner.getIopOperationInfo({
      type: "post",
      noEncrypt: true,
      userInfo: _0x26ca50,
      reqBody: {
        provinceCode: _0x1360a6,
        pageType: "1",
        loginNo: _0x2b1164,
        cellNum: _0x2b1164
      },
      async: true,
      dataType: "json",
      time: 1000,
      success: function (_0x1360a6) {
        if ("000000" == _0x1360a6.retCode) {
          var _0x432351 = (_0x1360a6.data && _0x1360a6.data.operatingGear || []).slice(0, 2);
          _0x432351 && _0x432351.map(function (_0x1360a6, _0x432351) {
            _0x24c053.splice(_0x432351, 1, _0x1360a6);
          });
          _0x34129f();
          _0x5c2cf1(_0x1360a6);
        }
      },
      error: function () {}
    });
  }
  function _0x230e88(_0x1360a6, _0x432351) {
    _0x316195 = 0;
    _0x515ffc = "0";
    _0x4270f6 = "0";
    var _0xb3954d = [{
      locaMon: "10"
    }, {
      locaMon: "20"
    }, {
      locaMon: "30"
    }, {
      locaMon: "50"
    }, {
      locaMon: "100"
    }, {
      locaMon: "200"
    }];
    var _0x5ce772 = [{
      locaMon: "500"
    }, {
      locaMon: "300"
    }, {
      locaMon: "200"
    }, {
      locaMon: "100"
    }, {
      locaMon: "50"
    }, {
      locaMon: "30"
    }];
    recharge_H5module_inner.getChargeCorner({
      type: "get",
      userInfo: _0x26ca50,
      reqBody: {
        provCode: _0x1360a6,
        cellNum: _0x2225e4
      },
      async: false,
      dataType: "json",
      time: 1000,
      success: function (_0x432351) {
        if ("000000" == _0x432351.retCode) {
          var _0x13ad6e = !!_0x432351.data && !!_0x432351.data.cornerList && _0x432351.data.cornerList;
          if (_0x13ad6e = _0x13ad6e && _0x13ad6e.map(function (_0x1360a6) {
            _0x1360a6.tag = _0x1360a6.tag || "";
            return _0x1360a6;
          }), _0x316195 = !!_0x432351.data && !!_0x432351.data.broadbandPos && _0x432351.data.broadbandPos || 0, _0x515ffc = !!_0x432351.data && !!_0x432351.data.isSortCorner && _0x432351.data.isSortCorner, _0x26ca50.phoneNumber == _0x2225e4 && "0" == _0x5e1d04 && (_0x5e1d04 = !!_0x432351.data && !!_0x432351.data.popUp4t && _0x432351.data.popUp4t || "0"), _0x4270f6 = !!_0x432351.data && !!_0x432351.data.customGearSwitch && _0x432351.data.customGearSwitch, _0x432351.data && _0x432351.data.heButton && 0 == Number(_0x432351.data.heButton)) {
            $(".btn-container-sty").removeClass("hidden");
            $(".buttonShowAddText").removeClass("buttonShowAddText-text-color");
          } else {
            if (_0x432351.data && undefined === _0x432351.data.heButton) {
              var _0x57ee71 = ["551"];
              -1 == _0x57ee71.indexOf(_0x1360a6) ? ($(".btn-container-sty").removeClass("hidden"), $(".buttonShowAddText").removeClass("buttonShowAddText-text-color")) : _0x31c011();
            } else {
              _0x31c011();
            }
          }
          _0x13ad6e.length == _0x14fb03 ? (_0x1101cd(_0x13ad6e), _0x10f733(_0x13ad6e)) : ("571" == _0x1360a6 ? (_0x1101cd(_0x5ce772), _0x316195 = 3) : _0x1101cd(_0xb3954d), _0x10f733());
        } else {
          _0x31c011();
          "571" == _0x1360a6 ? (_0x1101cd(_0x5ce772), _0x316195 = 3) : _0x1101cd(_0xb3954d);
          _0x10f733();
        }
      },
      error: function () {
        _0x31c011();
        "571" == _0x1360a6 ? (_0x1101cd(_0x5ce772), _0x316195 = 3) : _0x1101cd(_0xb3954d);
        _0x10f733();
      }
    });
  }
  function _0x31c011() {
    $(".recharge-btn").addClass("recharge-btn-color");
    $(".recharge-btn > .recharge-shadow").removeClass("hidden");
  }
  function _0x5ce900(_0x1360a6) {
    var _0x432351 = _0x1360a6;
    (Number(_0x4cf058) > Number(_0x1360a6) || Number(_0x1360a6) > Number(_0x3975a2)) && (_0x432351 = 0);
    return _0x432351;
  }
  function _0xc27415(_0x1360a6) {
    var _0x432351 = publicClient.getQueryString("type");
    var _0xb3954d = publicClient.getQueryString("amount");
    if ("0" == _0x432351 && _0xb3954d || _0x1360a6) {
      _0x1360a6 && (_0xb3954d || (_0xb3954d = _0x1360a6));
      null === _0x2225e4 && (_0x26ca50.phoneNumber && (_0x2225e4 = _0x26ca50.phoneNumber), publicClient.getQueryString("telNo") && (_0x2225e4 = publicClient.getQueryString("telNo"), _0x2225e4 = _0x5f332b(_0x2225e4)));
      _0xec0045 = _0x5ce900(Number(_0xb3954d));
      $(".num-item").removeClass("active");
      $(".num-item").eq(_0x14fb03).addClass("active");
      _0xec0045 > 0 && ($(".money-input").val(_0xec0045), $(".num-item").eq(_0x14fb03).children(".money").html(_0xec0045 + "元" + _0x31c8fb).removeClass("hidden"));
      _0x1360a6 && ($(".num-item").eq(_0x14fb03).children(".money").addClass("calcul-money"), $("#calcul-money-tip").html("欠费金额"));
    } else {
      if (publicClient.getQueryString("telNo") && publicClient.getQueryString("amount")) {
        publicClient.getQueryString("telNo").length >= 11 ? (null === _0x2225e4 && (_0x2225e4 = publicClient.getQueryString("telNo"), _0x2225e4 = _0x5f332b(_0x2225e4)), _0xec0045 = Number(publicClient.getQueryString("amount")), _0x5c4afb()) : publicClient.showDialogPlug("手机号码格式不正确", "知道了");
      } else {
        if (_0x5d614c && _0x5d614c.length > 0 && !_0xb3954d) {
          var _0x5ce772 = _0x316195;
          if (_0x18cd43 = "-1", _0xec0045 = Number(_0x5d614c[_0x5ce772].locaMon), $(".num-item").eq(0).hasClass("num-item-gear-one")) {
            _0xec0045 = Number(_0x5d614c[0].locaMon);
            $(".num-item").eq(0).addClass("gear-one-active").siblings().removeClass("active");
          } else {
            if (_0x5ce772 > 2) {
              var _0x13ad6e = $(".individualizeMore");
              _0x13ad6e.removeClass("hidden");
              $(".num-more").remove();
            }
            $(".num-item").eq(_0x5ce772).addClass("active").siblings().removeClass("active");
          }
        }
      }
    }
  }
  function _0x5c4afb() {
    if (_0x5d614c && _0x5d614c.length > 0) {
      $(".num-item").removeClass("active gear-one-active");
      for (var _0x1360a6 = false, _0x432351 = 0; _0x432351 < _0x5d614c.length; _0x432351++) {
        if (Number(_0x5d614c[_0x432351].locaMon) == Number(_0xec0045)) {
          if (_0x1360a6 = true, $(".num-item").eq(_0x432351).hasClass("num-item-gear-one")) {
            $(".num-item").eq(_0x432351).addClass("gear-one-active");
          } else {
            if (_0x432351 > 2) {
              var _0xb3954d = $(".individualizeMore");
              _0xb3954d.removeClass("hidden");
              $(".num-more").remove();
            }
            $(".num-item").eq(_0x432351).addClass("active");
          }
          break;
        }
      }
      _0x1360a6 || (_0xec0045 = _0x5ce900(_0xec0045), $(".num-item").removeClass("active"), $(".num-item").eq(_0x14fb03).addClass("active"), _0xec0045 > 0 && ($(".money-input").val(_0xec0045), $(".num-item").eq(_0x14fb03).children(".money").html(_0xec0045 + "元" + _0x31c8fb).removeClass("hidden")));
    } else {
      _0x5e9139[publicClient.getQueryString("amount") + ""] ? (_0xec0045 = Number(publicClient.getQueryString("amount")), $(".num-item").removeClass("active"), $(".num-item").eq(_0x5e9139[_0xec0045 + ""] - 1).addClass("active")) : (_0xec0045 = _0x5ce900(_0xec0045), $(".num-item").removeClass("active"), $(".num-item").eq(_0x14fb03).addClass("active"), _0xec0045 > 0 && ($(".money-input").val(_0xec0045), $(".num-item").eq(_0x14fb03).children(".money").html(_0xec0045 + "元" + _0x31c8fb).removeClass("hidden")));
    }
  }
  function _0x878385(_0x1360a6, _0x432351) {
    _0x432351 = _0x432351 || [7, 8, 0];
    var _0xb3954d = _0x1360a6.split(".");
    return _0xb3954d[0] > _0x432351[0] || _0xb3954d[0] == _0x432351[0] && _0xb3954d[1] > _0x432351[1] || _0xb3954d[0] == _0x432351[0] && _0xb3954d[1] == _0x432351[1] && _0xb3954d[2] >= _0x432351[2];
  }
  function _0x360af9(_0x1360a6) {
    publicClient.showLoadPlug();
    recharge_H5module_inner.getGdRealtionship({
      type: "post",
      noEncrypt: true,
      userInfo: _0x26ca50,
      time: 1000,
      reqBody: {
        cellNum: _0x2225e4,
        phoneNo: _0x2225e4
      },
      success: function (_0x432351) {
        var _0xb3954d;
        var _0x5ce772;
        var _0x13ad6e;
        "000000" == _0x432351.retCode && (_0x5ce772 = _0x432351.data && _0x432351.data.queryinfolist && 1 == _0x432351.data.queryinfolist.length && _0x432351.data.queryinfolist[0].balance, _0x13ad6e = _0x432351.data && _0x432351.data.queryinfolist && 1 == _0x432351.data.queryinfolist.length && _0x432351.data.queryinfolist[0].shouldpay, (Number(_0x5ce772) > 0 || Number(_0x5ce772) < 0) && ($("#balanceMoney").text(Number(_0x5ce772)), $(".balance").removeClass("hidden"), $("#balanceMoney").removeClass("balanceRed")), Number(_0x13ad6e) > 0 && Number(_0x5ce772) <= 0 && (_0xb3954d = Math.abs(Number(_0x13ad6e)), _0xb3954d < _0x4cf058 ? _0xb3954d = _0x4cf058 : _0xb3954d > _0x3975a2 && (_0xb3954d = _0x3975a2)));
        _0xc27415(_0xb3954d);
        publicClient.closeLoadPlug();
        "function" == typeof _0x1360a6 && _0x1360a6();
      },
      error: function (_0x432351) {
        _0xc27415();
        publicClient.closeLoadPlug();
        "function" == typeof _0x1360a6 && _0x1360a6();
      }
    });
  }
  function _0x1a2a73(_0x432351, _0xb3954d) {
    localStorage.removeItem("cmcc-protocal-content");
    localStorage.removeItem("cmcc-protocal-page-title");
    recharge_H5module_inner.getProtocolInfo({
      type: "post",
      noEncrypt: true,
      userInfo: _0x26ca50,
      reqBody: {
        cellNum: _0x2b1164,
        operateId: _0x432351,
        homeProv: _0x56d11a
      },
      async: false,
      dataType: "json",
      time: 3000,
      success: function (_0x432351) {
        if ("000000" == _0x432351.retCode) {
          _0x432351.data = _0x432351.data || {};
          _0x432351.data.protocolName && $(".product-info-use-desc-protocal").html("《" + _0x432351.data.protocolName + "》");
          var _0x5ce772 = "https://touch.10086.cn/i/reapp/v2.0/pages/recharge/";
          _0x1360a6.location.href.indexOf("/i/gray") > -1 && (_0x5ce772 = "https://touch.10086.cn/i/gray/reapp/v2.0/pages/recharge/");
          _0x432351.data.protocolContent && ($(".product-info-use-desc-protocal").attr("openUrl", _0x5ce772 + "recharge_rule_ds.html"), localStorage.setItem("cmcc-protocal-content", _0x432351.data.protocolContent), localStorage.setItem("cmcc-protocal-page-title", _0x432351.data.protocolName));
          _0xb3954d(_0x432351.data.protocolContent, _0x432351.data.protocolName);
        } else {
          _0xb3954d();
        }
      },
      error: function () {
        _0xb3954d();
      }
    });
  }
  function _0x34a6c0() {
    var _0x432351 = _0x110885[_0x31d566] || {};
    if (_0x20d200 && (_0x432351 = _0x269b4b[0]), "12" == _0x432351.saleType) {
      $("#pure-order-product-title").html(_0x432351.saleName);
      var _0xb3954d = "https://wx.10086.cn/website/businessPlatform/confirmOrder?normid=" + _0x432351.normCdgId + "&secondChannel=ZGYDAPPCZ";
      _0x1360a6.location.href.indexOf("gray") > -1 && (_0xb3954d = "https://wx.10086.cn/website/businessPlatform/confirmOrder?grayscale=grayshop&normid=" + _0x432351.normCdgId + "&secondChannel=ZGYDAPPCZ");
      return void (_0x878385(_0x26ca50.version, [7, 5, 6]) ? cmcc.getYDRZToken({
        debug: false,
        sourceId: "017018",
        success: function (_0x1360a6) {
          _0xb3954d += "&leadeonToken=" + (_0x1360a6 && _0x1360a6.token);
          $("#pure-order-product-url").attr("src", _0xb3954d);
          $(".pureAddSms").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow");
          $(".mask-box-box").removeClass("reminder-to-bottom").addClass("reminder-to-top");
        },
        error: function () {
          $("#pure-order-product-url").attr("src", _0xb3954d);
          $(".pureAddSms").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow");
          $(".mask-box-box").removeClass("reminder-to-bottom").addClass("reminder-to-top");
        }
      }) : ($("#pure-order-product-url").attr("src", _0xb3954d), $(".pureAddSms").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow"), $(".mask-box-box").removeClass("reminder-to-bottom").addClass("reminder-to-top")));
    }
    $("#unit-order-product-title").html(_0x432351.saleName);
    _0x20d200 ? ($(".product-info-use-title").addClass("hidden"), $("#unit-order-product-desc").addClass("product-info-use-desc-sqb")) : ($(".product-info-use-title").removeClass("hidden"), $("#unit-order-product-desc").removeClass("product-info-use-desc-sqb"));
    $("#unit-order-product-desc").html(_0x51ca5d(_0x432351.saleDesc));
    _0x432351.agreeName && $(".product-info-use-desc-protocal").html("《" + _0x432351.agreeName + "》");
    _0x432351.agreeUrl && $(".product-info-use-desc-protocal").attr("openUrl", _0x432351.agreeUrl);
    _0x432351.agreeName && _0x432351.agreeUrl ? $(".product-info-read-check").attr("does-click", "can") : _0x1a2a73(_0x432351.operateId, function () {
      $(".product-info-read-check").attr("does-click", "can");
    });
    $(".product-info-read-con").hasClass("active") && $(".product-info-read-con").removeClass("active");
    $(".init-button").removeClass("disable");
    $(".provinceAddSms").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow");
    $(".mask-box-box").removeClass("reminder-to-bottom").addClass("reminder-to-top");
    $(".provinceAddSms .validate-pno").html("<span class='validate-pno-sty'>" + _0x2b1164.substring(0, 3) + "****" + _0x2b1164.substring(7, 11) + "</span>");
    _0x20d200 ? publicClient.setGdpTrace({}, "popview", {
      WT_envName: "充值页面_省钱包业务订购弹窗_弹窗出现",
      WT_event: "H5PopShow",
      XY_sqb_group: ((_0x269b4b[0] || {}).presentCode || "").split("|")[1] || ""
    }) : publicClient.setGdpTrace({}, "imp", {
      WT_area_type_1: "弹窗",
      WT_envName: "弹出",
      WT_area_name: "加购热门权益_二次确认弹窗"
    });
  }
  function _0x1bcfcb() {
    var _0x1360a6 = {
      ruleUse: [],
      ruleNouse: []
    };
    if (_0x110885.length > 0) {
      for (var _0x432351 = 0; _0x432351 < _0x110885.length; _0x432351++) {
        var _0xb3954d = "";
        if (_0xb3954d = _0x502dad(_0x110885[_0x432351].saleCode), _0x110885[_0x432351].price = "", 0 == _0x110885[_0x432351].usable) {
          if (_0x2de7bb && "1" == _0x110885[_0x432351][_0x2d1286]) {
            _0x1360a6.ruleNouse.push(_0x110885[_0x432351]);
            continue;
          }
          if ("11" == _0x110885[_0x432351].saleType || "12" == _0x110885[_0x432351].saleType) {
            for (var _0x5ce772 = false, _0x13ad6e = 0; _0x13ad6e < _0xb3954d.max.length; _0x13ad6e++) {
              if (Number(_0xec0045) >= Number(_0xb3954d.min[_0x13ad6e]) && Number(_0xec0045) <= Number(_0xb3954d.max[_0x13ad6e])) {
                _0x110885[_0x432351].price = Number(_0xb3954d.dis[_0x13ad6e]).toFixed(2);
                _0x5ce772 = true;
                break;
              }
            }
            _0x5ce772 ? _0x1360a6.ruleUse.push(_0x110885[_0x432351]) : _0x1360a6.ruleNouse.push(_0x110885[_0x432351]);
          }
        } else {
          _0x1360a6.ruleNouse.push(_0x110885[_0x432351]);
        }
      }
    }
    return _0x1360a6;
  }
  function _0x389e04(_0x1360a6) {
    try {
      var _0x432351 = _0x38a94c.discountRules.filter(function (_0x1360a6) {
        return _0x1360a6.activityShowArea != _0xae0d2d;
      }) || [];
      var _0xb3954d = _0x38a94c.discountNoRules.filter(function (_0x1360a6) {
        return _0x1360a6.activityShowArea != _0xae0d2d;
      }) || [];
      var _0x5ce772 = _0x432351.length + _0xb3954d.length + _0x38a94c.discountNoCoupons.length + _0x38a94c.discountCoupons.length;
      _0x5a64ee.includes(_0x56d11a) && (_0x5ce772 = _0x38a94c.discountRules.length + _0x38a94c.discountNoRules.length + _0x38a94c.discountNoCoupons.length + _0x38a94c.discountCoupons.length);
      _0x1360a6 || (0 == _0x5ce772 ? ($(".cou-text").html("无可用").removeClass("blue"), $(".benefit-item >.coupon").removeClass("active"), $(".coupon-net").addClass("no-right")) : ($(".coupon-net").removeClass("no-right"), (_0x41a07a.length < 1 && _0x5a64ee.includes(_0x56d11a) || null == _0x5ebec7) && ($(".benefit-item >.coupon").removeClass("active"), $(".cou-text").html("请选择"))));
      return _0x5ce772;
    } catch (_0x9480ef) {
      return 1;
    }
  }
  function _0x13a4a1() {
    try {
      var _0x1360a6 = _0x546c96.canUsePoint && _0x546c96.canUsePoint.length;
      if (_0x1360a6 > 0) {
        var _0x432351 = _0x546c96.canUsePoint.some(function (_0x1360a6) {
          return _0x1360a6.index === _0x247bbf;
        });
        _0x2de7bb = _0x432351;
        _0x432351 || (_0x247bbf = -1, $(".point-box-detail").removeClass("active"));
        var _0xb3954d = $("#pointProductConTpl").html();
        var _0x5ce772 = juicer(_0xb3954d, {
          jfArrs: _0x546c96.canUsePoint,
          totalPoint: _0x546c96.userTotalPoint,
          rechargeJf: _0x2de7bb,
          rechargeInxJf: _0x247bbf
        });
        $(".point-product-container").html(_0x5ce772);
        var _0x13ad6e = 0;
        var _0x57ee71 = 0;
        var _0x112757 = -1;
        var _0x4f7a33 = "";
        _0x2de7bb ? _0x546c96.canUsePoint.map(function (_0x1360a6) {
          _0x1360a6.index == _0x247bbf && (_0x13ad6e = _0x1360a6.offsetPoint, _0x57ee71 = _0x1360a6.offsetFee, _0x112757 = _0x247bbf, _0x4f7a33 = _0x1360a6.saleName);
        }) : (_0x13ad6e = _0x546c96.canUsePoint[_0x1360a6 - 1].offsetPoint, _0x57ee71 = _0x546c96.canUsePoint[_0x1360a6 - 1].offsetFee, _0x4f7a33 = _0x546c96.canUsePoint[_0x1360a6 - 1].saleName);
        $("#can_use_point_num").html(_0x13ad6e);
        $("#can_use_point_fee").html(_0x57ee71 + "元");
        $("#can_use_point_num").attr("jf_inx", _0x112757);
        $(".point-box").removeClass("hidden");
        var _0x232a41 = {
          WT_et: "imp",
          WT_area_type_1: "楼层",
          WT_area_type_2: "",
          WT_area_name: "积分运营位",
          XY_env_type: "button",
          WT_event: "P00000116838",
          WT_envName: _0x4f7a33,
          XY_gd_source: "",
          WT_markId: ""
        };
        var _0xd89ed2 = 1;
        $(".num-item").each(function (_0x1360a6) {
          $(this).hasClass("active") && (_0xd89ed2 = $(this).attr("buryingval"));
        });
        _0x2d43c9(".point-box", _0x232a41, "jfImpFloor", parseInt(_0xd89ed2));
        $(".point-point-use-desc").html(_0x51ca5d(_0x546c96.pointDesc || "<p>1、AI豆仅能抵扣优惠前金额，充值成功后AI豆不予退还。<br />\r\n2、AI豆抵扣话费使用规则以各省移动规则为准，具体详询当地10086。</p>"));
      } else {
        $(".point-box").addClass("hidden");
        _0x247bbf = -1;
        _0x2de7bb = false;
        $(".point-box-detail").removeClass("active");
      }
    } catch (_0x552a62) {}
  }
  function _0x1ad579(_0x1360a6) {
    null != _0x5ebec7 && ("rule" == _0xf07e2f && _0x4441f9[_0x5ebec7] && "1" == _0x4441f9[_0x5ebec7][_0x2d1286] && (_0x5ebec7 = null, _0xf07e2f = null, _0x1360a6 = true, _0x1cbdea = "", _0x4c8354 = null), "coupon" == _0xf07e2f && _0x5c0b1a[_0x5ebec7] && "1" == _0x5c0b1a[_0x5ebec7][_0x2d1286] && (_0x5ebec7 = null, _0xf07e2f = null, _0x1360a6 = true, _0x1cbdea = "", _0x26576b = "", _0x4c8354 = null));
    ((_0x29c538() || []).filter(function (_0x1360a6) {
      return "1" == _0x1360a6[_0x2d1286];
    }) || []).length > 0 && (_0x41a07a = [], $(".coupon-main-yn").attr("choosedstr", _0x41a07a));
    _0x4441f9[_0x18cd43] && "1" == _0x4441f9[_0x18cd43][_0x2d1286] && (_0x18cd43 = "-1", _0x1cbdea = "");
    "-1" != _0x31d566 && _0x110885[_0x31d566] && "1" == _0x110885[_0x31d566][_0x2d1286] && (_0x31d566 = "-1", $("#buttonShowAddText").html(""));
    return _0x1360a6;
  }
  function _0x369a4a() {
    _0x35e905 = false;
    _0x1e2cbe = [];
    var _0x1360a6 = navigator.userAgent.toLowerCase();
    var _0x432351 = _0x1360a6.indexOf("harmony") > -1 && _0x1360a6.indexOf("arkweb") > -1;
    if (_0x2225e4 && _0x2b1164 == _0x2225e4 && !_0x432351 && _0x878385(_0x26ca50.version, [11, 9, 1])) {
      var _0xb3954d = _0xf89011(_0x2225e4);
      recharge_H5module_inner.getPointRule({
        userInfo: _0x26ca50,
        reqBody: {
          cellNum: _0x2b1164,
          phoneNo: _0xb3954d,
          provCode: _0x56d11a,
          channel: "11",
          payPhoneNo: _0x2b1164
        },
        noEncrypt: true,
        time: 3000,
        success: function (_0x1360a6) {
          if ("000000" == _0x1360a6.retCode) {
            if (_0x1360a6.data && (_0x1e2cbe = _0x1360a6.data.pointRules || [], _0x546c96.userTotalPoint = _0x1360a6.data.userPoint || 0, _0x546c96.pointDesc = _0x1360a6.data.tipContent, _0x1e2cbe.length > 0)) {
              for (var _0x432351 = 0; _0x432351 < _0x1e2cbe.length; _0x432351++) {
                _0x1e2cbe[_0x432351].type = "point";
                _0x1e2cbe[_0x432351].index = _0x432351;
                var _0xb3954d = (_0x1e2cbe[_0x432351].presentCode || "").split("|");
                _0x1e2cbe[_0x432351].offsetFee = _0xb3954d[1];
                _0x1e2cbe[_0x432351].offsetPoint = _0xb3954d[0];
              }
              _0x26a397();
            }
          } else {
            "537033" == _0x1360a6.retCode && (_0x35e905 = true);
          }
        },
        error: function (_0x1360a6) {}
      });
    }
  }
  function _0x490586(_0x1360a6, _0x432351) {
    if (_0x2de7bb) {
      var _0xb3954d = (_0x546c96.canUsePoint && _0x546c96.canUsePoint.filter(function (_0x1360a6) {
        return _0x1360a6.index == parseInt(_0x247bbf);
      }) || [])[0];
      var _0x5ce772 = _0x3a91e4(Number(_0x1360a6), Number(_0xb3954d.saleType), _0xb3954d, _0xb3954d.discountFormat || "");
      _0x5b9488 = _0xb3954d.offsetFee;
      _0x5906db = _0xb3954d.offsetPoint;
      _0x93b9bd = _0xb3954d.operateId;
      _0x1360a6 = _0x5ce772.pMon;
      "function" == typeof _0x432351 && _0x432351(_0x1360a6);
    } else {
      "function" == typeof _0x432351 && _0x432351(_0x1360a6);
    }
  }
  function _0x2750ba() {
    var _0x1360a6 = {
      ruleUse: [],
      ruleNouse: []
    };
    if (_0x1e2cbe && _0x1e2cbe.length > 0) {
      for (var _0x432351 = 0; _0x432351 < _0x1e2cbe.length; _0x432351++) {
        var _0xb3954d = "";
        if (_0xb3954d = _0x502dad(_0x1e2cbe[_0x432351].saleCode || ""), 0 == _0x1e2cbe[_0x432351].usable) {
          for (var _0x5ce772 = false, _0x13ad6e = 0; _0x13ad6e < _0xb3954d.max.length; _0x13ad6e++) {
            if (Number(_0xec0045) >= Number(_0xb3954d.min[_0x13ad6e]) && Number(_0xec0045) <= Number(_0xb3954d.max[_0x13ad6e])) {
              _0x5ce772 = true;
              break;
            }
          }
          _0x5ce772 ? _0x1360a6.ruleUse.push(_0x1e2cbe[_0x432351]) : _0x1360a6.ruleNouse.push(_0x1e2cbe[_0x432351]);
        } else {
          _0x1360a6.ruleNouse.push(_0x1e2cbe[_0x432351]);
        }
      }
    }
    return _0x1360a6;
  }
  function _0x3312cc() {
    if (_0x2225e4 && _0x2b1164 == _0x2225e4) {
      var _0x1360a6 = _0xf89011(_0x2225e4);
      var _0x432351 = "0";
      var _0xb3954d = "0";
      _0x544b8a.indexOf(_0x56d11a) > -1 && (_0xb3954d = "1");
      "200" == _0x56d11a && (_0x432351 = "1");
      publicClient.showLoadPlug();
      recharge_H5module_inner.getProvUnitOrderRule({
        userInfo: _0x26ca50,
        reqBody: {
          orderFlag: _0x432351,
          addProvFlag: _0xb3954d,
          pureEquityFlag: "1",
          provWalletFlag: "1",
          cellNum: _0x2b1164,
          phoneNo: _0x1360a6,
          provCode: _0x56d11a,
          channel: "11",
          pointFlag: 0,
          payPhoneNo: _0x2b1164
        },
        noEncrypt: true,
        success: function (_0x1360a6) {
          if (publicClient.closeLoadPlug(), "000000" == _0x1360a6.retCode && _0x1360a6.data) {
            _0x269b4b = _0x1360a6.data.provWalletRules || [];
            _0x269b4b[0] && 0 != _0x269b4b[0].usable && (_0x269b4b = []);
            _0x110885 = _0x1360a6.data.provRules || [];
            _0x110885 = _0x110885.concat(_0x1360a6.data.pureEquityRules || []);
            _0x110885 = _0x110885.concat(_0x1360a6.data.pureRules || []);
            for (var _0x432351 = 0; _0x432351 < _0x110885.length; _0x432351++) {
              _0x110885[_0x432351].index = _0x432351;
            }
            var _0xb3954d = _0x1360a6.data.pointRules || [];
            (_0x269b4b.length > 0 || _0x110885.length > 0 || _0xb3954d.length > 0) && _0x26a397();
          }
        },
        error: function (_0x1360a6) {}
      });
    }
  }
  function _0x10f733(_0x1360a6) {
    if (_0x2225e4) {
      _0x2d1915 && (_0x2b1164 = _0x2a2c6f, _0x813e0d = _0x3d9080);
      var _0x432351 = _0xf89011(_0x2225e4);
      publicClient.showLoadPlug();
      recharge_H5module_inner.getRechargeCardPayRule({
        userInfo: _0x26ca50,
        reqBody: {
          amountFlag: 1,
          saleFlag: 1,
          enableFlag: 1,
          couponFlag: 1,
          saleQueryType: 2,
          cellNum: _0x2b1164,
          phoneNo: _0x432351,
          enableType: 0,
          provCode: _0x56d11a,
          channel: "11",
          additionFlag: 1
        },
        noEncrypt: true,
        success: function (_0x432351) {
          if (publicClient.closeLoadPlug(), "000000" == _0x432351.retCode) {
            if (_0x432351.data) {
              if ($(".cou-text, .interests-text").removeClass("hidden blue"), $(".cou-reload, .interests-cou-reload").addClass("hidden"), $(".coupon-net, .interests-net").removeClass("no-right"), $(".reload-icon, .interests-reload-icon").removeClass("loadRotate"), _0x4441f9 = _0x432351.data.saleRules || [], _0x5c0b1a = _0x432351.data.couponRules || [], _0x56f2a8 = _0x432351.data.blindRules || [], _0x2a2d34 = _0x432351.data.addtionRules || [], _0x4441f9.length > 0) {
                for (var _0xb3954d = 0; _0xb3954d < _0x4441f9.length; _0xb3954d++) {
                  _0x4441f9[_0xb3954d].type = "rule";
                  _0x4441f9[_0xb3954d].index = _0xb3954d;
                }
              }
              if (_0x5c0b1a.length > 0) {
                for (var _0x5ce772 = false, _0x13ad6e = 0; _0x13ad6e < _0x5c0b1a.length; _0x13ad6e++) {
                  _0x5c0b1a[_0x13ad6e].type = "coupon";
                  _0x5c0b1a[_0x13ad6e].index = _0x13ad6e;
                  "0" == _0x5c0b1a[_0x13ad6e].canOlay ? _0x38a94c.hasCoupons = true : "1" == _0x5c0b1a[_0x13ad6e].canOlay && (_0x38a94c.hascanOlay = true);
                  !_0x5ce772 && _0x1360a6 && _0x2b1164 == _0x2225e4 && "7" == _0x5c0b1a[_0x13ad6e].saleType && "1~1:9" == _0x5c0b1a[_0x13ad6e].saleCode && (_0x14fb03 += 1, _0x5ce772 = true, _0x1360a6.unshift({
                    id: "101",
                    chargePos: "1",
                    cornerName: "",
                    tag: "",
                    locaMon: "1",
                    isInitialAmount: "1",
                    gearType: "1",
                    linkUrl: "",
                    gearOne: "1"
                  }), _0x1101cd(_0x1360a6), publicClient.setGdpTrace({}, "imp", {
                    WT_area_type_1: "楼层",
                    WT_area_name: "1元充值档位",
                    WT_envName: "1元充值档位按钮",
                    WT_event: "P00000051723",
                    XY_env_type: "button"
                  }));
                }
              }
              if (_0x432351.data.amountRule = _0x432351.data.amountRule || {}, _0x432351.data.usableRule = _0x432351.data.usableRule || {}, _0x3975a2 = parseInt(100 * parseFloat(_0x432351.data.amountRule.maxAmount)) / 100 || 1000, _0x4cf058 = parseInt(100 * parseFloat(_0x432351.data.amountRule.minAmount)) / 100 || 10, $(".money-input").attr("placeholder", _0x4cf058 + "~" + _0x3975a2), $(".minA").html(_0x4cf058), $(".maxA").html(_0x3975a2), 0 != parseInt(_0x432351.data.usableRule.usable) ? (publicClient.toastPlug("尊敬的用户您好，目前后台系统维护中，维护期间您无法在中国移动APP进行话费充值，给您带来不便，敬请谅解，感谢您对中国移动的关注与支持！", 2000), _0x1286c9 = false) : 0 == parseInt(_0x432351.data.usableRule.usable) && (_0x1286c9 = true), _0x2a2d34.length > 0 && _0x2a2d34.length == _0x4188e2) {
                var _0x57ee71 = _0x2a2d34[0].presentCode;
                var _0x112757 = _0x57ee71.split("|")[0];
                _0x27340f(_0x112757);
              } else {
                _0x56f2a8.length > 0 && _0x1509b2(_0x56f2a8[0].presentCode);
              }
              _0x3312cc();
              _0x369a4a();
              _0x2b1164 && _0x2b1164 == _0x2225e4 ? _0x152d09(function () {
                _0x5537c5();
                _0x26a397();
              }) : "200" == _0x26ca50.loginProvince ? _0x360af9(function () {
                _0x5537c5();
                _0x26a397();
              }) : (_0xc27415(), _0x5537c5(), _0x26a397());
            } else {
              _0x34b552();
            }
          } else {
            /^5\d{4}$/.test(_0x432351.retCode) ? cmcc.overTime() : _0x34b552();
          }
        },
        error: function (_0x1360a6) {
          publicClient.closeLoadPlug();
          _0x34b552();
        }
      });
    }
  }
  function _0x5537c5() {
    if (null != _0x3dfb3d && _0x5c0b1a.length > 0) {
      for (var _0x1360a6 = 0; _0x1360a6 < _0x5c0b1a.length; _0x1360a6++) {
        if (_0x3dfb3d == (_0x5c0b1a[_0x1360a6].pCardNo || _0x5c0b1a[_0x1360a6].pcardNo)) {
          _0x5ebec7 = _0x1360a6;
          _0xf07e2f = "coupon";
          var _0x432351 = Number(_0x5c0b1a[_0x1360a6].saleCode.split(":")[0].split("~")[0]);
          _0xec0045 = _0x432351 < Number(_0x3975a2) ? _0x432351 >= _0x4cf058 ? _0x432351 : _0x4cf058 : _0x3975a2;
          "1~1:9" == _0x5c0b1a[_0x1360a6].saleCode && (_0xec0045 = 1);
          sessionStorage.setItem("choose_money", _0xec0045);
          _0x5c4afb();
        }
      }
    }
  }
  function _0x34b552() {
    publicClient.toastPlug("优惠信息获取失败，请重新加载", 2000);
    $(".cou-text, .interests-text").addClass("hidden");
    $(".cou-reload, .interests-cou-reload").removeClass("hidden");
    $(".reload-text, .interests-reload-text").addClass("blue").html("重新加载");
    $(".coupon-net, .interests-net").addClass("no-right");
    $(".reload-icon, .interests-reload-icon").removeClass("loadRotate");
    _0xc27415();
    _0x26a397();
  }
  function _0x540d2e(_0x1360a6) {
    try {
      _0x878385(_0x26ca50.version, [11, 2, 1]) && "HarmonyOS" != _0x26ca50.osType && recharge_H5module_inner.aiMainQry({
        userInfo: _0x26ca50,
        reqBody: {
          phoneNum: _0x2b1164,
          cellNum: _0x2b1164
        },
        noEncrypt: true,
        time: 5000,
        success: function (_0x432351) {
          "000000" == _0x432351.retCode && _0x275134(_0x432351.data, _0x1360a6);
        },
        error: function () {}
      });
    } catch (_0xf89481) {}
  }
  function _0x37f002() {
    recharge_H5module_inner.jkBindingCardQry({
      userInfo: _0x26ca50,
      reqBody: {
        phoneNum: _0x2b1164,
        cellNum: _0x2b1164
      },
      noEncrypt: true,
      time: 1000,
      success: function (_0x1360a6) {
        if (console.log(_0x1360a6), "000000" == _0x1360a6.retCode && _0x1360a6.data && _0x1360a6.data.isFstBindCard && ("2" == _0x1360a6.data.isFstBindCard || "3" == _0x1360a6.data.isFstBindCard)) {
          $(".recharge_activebanner").removeClass("hidden");
          var _0x432351 = $("#coupon_activebanner").html();
          var _0xb3954d = juicer(_0x432351, {
            isFstBindCard: _0x1360a6.data.isFstBindCard
          });
          $(".recharge_activebanner").html(_0xb3954d);
          publicClient.setGdpTrace({}, "imp", {
            WT_et: "imp",
            WT_area_type_1: "楼层",
            WT_area_name: "卡劵运营位",
            XY_env_type: "button",
            WT_envName: "2" == _0x1360a6.data.isFstBindCard ? "领劵参与_未绑卡" : "领劵参与_已绑卡",
            WT_next_url: "https://ump.cmpay.com/front-msa/maktcfgh5/springFestivalBless?jrnNo=ACT3765&rulerId=NGVV3182&shareId=52&utm_source=YJDQ&utm_medium=QT&utm_term=jfsc&utm_content=11&utm_campaign=xcfd&_channel_track_key=2E4QKPsT",
            XY_gd_source: "金科"
          });
        }
      },
      error: function () {}
    });
  }
  function _0x655f91(_0x1360a6, _0x432351) {
    var _0xb3954d = {
      pMon: _0x432351,
      aMon: _0x432351
    };
    "rule" == _0x1360a6.type ? _0xb3954d = _0x3a91e4(Number(_0x432351), Number(_0x1360a6.saleType), _0x1360a6, _0x1360a6.discountFormat || "") : "coupon" == _0x1360a6.type && (_0xb3954d = _0x217c1a(Number(_0x432351), Number(_0x432351), _0x1360a6.saleType, _0x1360a6.discountFormat || 0, _0x1360a6.saleCode, _0x1360a6.capDiscount));
    _0xb3954d.present = _0xb3954d.aMon / (_0xb3954d.pMon + 1);
    _0xb3954d.saleData = _0x1360a6;
    return _0xb3954d;
  }
  function _0x4043fe(_0x1360a6, _0x432351, _0xb3954d) {
    var _0x5ce772 = _0x1360a6.concat(_0x432351);
    var _0x13ad6e = [];
    var _0x57ee71 = {};
    var _0x112757 = 0;
    var _0x4f7a33 = _0x5ce772.length > 0 && _0x5ce772.reduce(function (_0x1360a6, _0x432351, _0x5ce772) {
      var _0x4f7a33 = _0x1360a6;
      undefined === _0x4f7a33.checkInx && (_0x4f7a33.checkInx = 0);
      _0x432351.activityShowArea == _0xae0d2d && _0x112757++;
      var _0x232a41 = _0x655f91(_0x432351, _0xb3954d);
      _0x1360a6.present < _0x232a41.present && (_0x4f7a33 = _0x232a41, _0x4f7a33.checkInx = _0x5ce772 - _0x112757);
      _0x4f7a33.saleData.activityShowArea == _0xae0d2d ? _0x4f7a33.checkInx = "choosed" : _0x4f7a33.checkInx = _0x4f7a33.checkInx;
      -1 == _0x13ad6e.indexOf(_0x232a41.saleData.weights) && (_0x13ad6e.push(_0x232a41.saleData.weights), _0x232a41.checkInx = _0x5ce772 - _0x112757, _0x232a41.saleData.activityShowArea == _0xae0d2d ? _0x232a41.checkInx = "choosed" : _0x232a41.saleData.checkInx = _0x232a41.saleData.checkInx, undefined !== _0x232a41.saleData.weights && (_0x57ee71[_0x232a41.saleData.weights] = _0x232a41));
      return _0x4f7a33;
    }, _0x655f91(_0x5ce772[0], _0xb3954d));
    var _0x232a41 = "-1";
    _0x13ad6e.map(function (_0x1360a6) {
      undefined !== _0x1360a6 && parseInt(_0x1360a6) > parseInt(_0x232a41) && (_0x232a41 = _0x1360a6);
    });
    _0x4f7a33.choosing = _0x13ad6e.length;
    "-1" != _0x232a41 && (_0x4f7a33.mostObj = _0x57ee71[_0x232a41]);
    return _0x4f7a33;
  }
  function _0x29e23f() {
    _0x4a8f3e = "";
    _0x5d37ac = "";
    _0x5ee3f5 = "";
    _0x3c3c8b = "";
    $(".recharge-arrival").html("");
  }
  function _0x26a397(_0x1360a6, _0x432351, _0xb3954d) {
    if (_0x110885 && _0x110885.length > 0) {
      var _0x5ce772 = _0x1bcfcb();
      _0x546c96.productRules = _0x5ce772.ruleUse;
      _0x546c96.productNoRules = _0x5ce772.ruleNouse;
    }
    if (_0x1e2cbe && _0x1e2cbe.length > 0) {
      var _0x13ad6e = _0x2750ba();
      _0x546c96.canUsePoint = _0x13ad6e.ruleUse;
    }
    if ($(".benefit-item >.coupon").removeClass("item-disable").addClass("active"), $(".youhui").removeClass("youhui-not-use"), _0x403563(), _0x13a4a1(), _0x5a64ee.includes(_0x56d11a)) {
      return void _0x463dca(_0x1360a6, _0xb3954d);
    }
    if (_0x4441f9 && _0x4441f9.length > 0 || _0x5c0b1a && _0x5c0b1a.length > 0) {
      var _0x57ee71 = _0x39e0f0();
      var _0x112757 = _0x3dbf2b();
      _0x38a94c.discountRules = _0x57ee71.ruleUse;
      _0x38a94c.discountNoRules = _0x57ee71.ruleNouse;
      _0x38a94c.discountCoupons = _0x112757.dataColor;
      _0x38a94c.discountNoCoupons = _0x112757.dataGray;
    }
    if (_0x56f2a8 && _0x56f2a8.length > 0) {
      var _0x4f7a33 = _0x156486();
      _0x3de03c.maskBoxRules = _0x4f7a33.maskRuleUse;
      _0x3de03c.maskBoxNoRules = _0x4f7a33.maskRuleNouse;
      _0x3de03c.maskBlindRules = _0x56f2a8;
    }
    if (_0x2a2d34 && _0x2a2d34.length > 0) {
      var _0x232a41 = _0x51c8f5();
      _0xe5922b.addtionBoxRules = _0x232a41.addtionRuleUse;
      _0xe5922b.addtionBoxNoRules = _0x232a41.addtionRuleNouse;
      _0xe5922b.addtionBlindRules = _0x2a2d34;
    }
    var _0xd89ed2 = false;
    if (null != _0x3dfb3d && !_0x4c8354 && 0 != _0x4c8354) {
      for (var _0x1509b2 = 0; _0x1509b2 < _0x38a94c.discountCoupons.length; _0x1509b2++) {
        if ((_0x38a94c.discountCoupons[_0x1509b2].pCardNo || _0x38a94c.discountCoupons[_0x1509b2].pcardNo) == _0x3dfb3d) {
          var _0x27340f = _0x38a94c.discountRules && _0x38a94c.discountRules.filter(function (_0x1360a6) {
            return _0x1360a6.activityShowArea != _0xae0d2d;
          });
          _0x4c8354 = _0x1509b2 + _0x27340f.length;
          _0xd89ed2 = true;
          break;
        }
      }
    }
    _0x38a94c.discountRules.length + _0x38a94c.discountCoupons.length >= 1 ? $(".youhui").removeClass("hidden") : $(".youhui").addClass("hidden");
    var _0xb9ded1 = $("#discountTpl").html();
    juicer.register("getDateym", _0x105087);
    juicer.register("getCardType", _0x48fee0);
    juicer.register("getcouponValue", _0x4c1877);
    juicer.register("getTipInfo", _0x3ebfc4);
    var _0x19c473 = _0x4043fe(_0x38a94c.discountRules, _0x38a94c.discountCoupons, _0xec0045);
    var _0x54c559 = _0x19c473 && _0x19c473.saleData && _0x19c473.saleData.type;
    var _0x2812f9 = _0x19c473 && _0x19c473.saleData && _0x19c473.saleData.index;
    _0x38a94c.festType = _0x54c559;
    _0x38a94c.festIndex = _0x2812f9;
    var _0x230e88 = juicer(_0xb9ded1, _0x38a94c);
    $(".coupon-list").html(_0x230e88);
    var _0x31c011 = 0;
    var _0x5ce900 = 0;
    var _0xc27415 = 1;
    $(".num-item").each(function (_0x1360a6) {
      $(this).hasClass("active") && (_0x31c011 = parseInt($(this).attr("posval") / 3), _0x5ce900 = $(this).attr("posval") % 3, _0xc27415 = $(this).attr("buryingval"));
    });
    var _0x5c4afb = _0x38a94c.discountRules.filter(function (_0x1360a6) {
      return _0x1360a6.activityShowArea == _0xae0d2d;
    });
    if (_0x5c4afb && _0x5c4afb.length > 0) {
      var _0x878385 = null;
      _0x19c473 && 1 == _0x19c473.choosing ? _0x878385 = _0x19c473.saleData : _0x19c473 && _0x19c473.choosing > 1 && (_0x878385 = _0x19c473.mostObj.saleData);
      "-1" == _0x18cd43 && _0x878385 && (_0x38a94c.discountRules.map(function (_0x1360a6, _0x432351) {
        _0x1360a6.index == _0x878385.index && "rule" == _0x878385.type && (_0x2de7bb && !_0xb3954d || (_0x18cd43 = _0x1360a6.index));
      }), "-1" != _0x18cd43 && _0x878385.activityShowArea != _0xae0d2d && (_0x18cd43 = "A"), null != _0x3dfb3d && _0xd89ed2 && (_0x18cd43 = "A"));
      var _0x360af9 = $("#gearsRulTpl").html();
      var _0x1a2a73 = juicer(_0x360af9, {
        gearRules: _0x5c4afb,
        arrowRules: [0, 1, 2],
        gearChoosedVal: _0x5ce900,
        gearRuleChecked: _0x18cd43
      });
      var _0x34a6c0 = "";
      if (_0x546c96.productRules.length > 0 && (_0x546c96.productUnitRules = _0x546c96.productRules.filter(function (_0x1360a6) {
        return "11" == _0x1360a6.saleType || "12" == _0x1360a6.saleType;
      }), (_0x546c96.productUnitRules || []).length > 0)) {
        var _0x1ad579 = $("#productRulTpl").html();
        var _0x369a4a = _0x546c96.productUnitRules.filter(function (_0x1360a6) {
          return _0x1360a6.imageCode;
        }).length;
        _0x34a6c0 = juicer(_0x1ad579, {
          gearRules: _0x546c96.productUnitRules,
          arrowRules: [],
          gearChoosedVal: _0x5ce900,
          gearRuleChecked: _0x31d566,
          totalRowNum: _0x369a4a,
          evestr: _0x26a064
        });
      }
      $(".under-pay-rule-container").empty();
      $(".under-pay-rule-container").each(function (_0x1360a6) {
        $(this).attr("posinxval") == _0x31c011 && ($(this).html(_0x1a2a73 + _0x34a6c0), _0x1a9aa7(".under-pay-rule-container", _0x31c011, parseInt(_0xc27415), _0x546c96.productUnitRules || []));
      });
    } else {
      if (_0x546c96.productRules.length > 0) {
        if (_0x546c96.productUnitRules = _0x546c96.productRules.filter(function (_0x1360a6) {
          return "11" == _0x1360a6.saleType || "12" == _0x1360a6.saleType;
        }), (_0x546c96.productUnitRules || []).length > 0) {
          var _0x360af9 = $("#productRulTpl").html();
          var _0x369a4a = _0x546c96.productUnitRules.filter(function (_0x1360a6) {
            return _0x1360a6.imageCode;
          }).length;
          var _0x1a2a73 = juicer(_0x360af9, {
            gearRules: _0x546c96.productUnitRules,
            arrowRules: [0, 1, 2],
            gearChoosedVal: _0x5ce900,
            gearRuleChecked: _0x31d566,
            totalRowNum: _0x369a4a,
            evestr: _0x26a064
          });
          $(".under-pay-rule-container").empty();
          $(".under-pay-rule-container").each(function (_0x1360a6) {
            $(this).attr("posinxval") == _0x31c011 && ($(this).html(_0x1a2a73), _0x1a9aa7(".under-pay-rule-container", _0x31c011, _0xc27415, _0x546c96.productUnitRules || []));
          });
        }
      } else {
        $(".under-pay-rule-container").empty();
        _0x18cd43 = "A";
        _0x31d566 = "-1";
      }
    }
    var _0x3312cc = $("#interestsTpl").html();
    var _0x10f733 = juicer(_0x3312cc, _0x264fbd);
    $(".interests-list").html(_0x10f733);
    var _0x5537c5 = $("#maskBoxTpl").html();
    var _0x34b552 = juicer(_0x5537c5, _0x3de03c);
    var _0x540d2e = $("#addtionBoxTpl").html();
    var _0x37f002 = juicer(_0x540d2e, _0xe5922b);
    undefined === _0x1360a6 && (_0x1360a6 = true);
    _0xfe06d3 && $(".addtion-box").html(_0x37f002);
    _0x1360a6 && $(".mask-box").html(_0x34b552);
    _0xe5922b.addtionRights.length > 0 && $(".addtion-box").removeClass("hidden");
    _0x3de03c.maskRights.length > 0 && $(".mask-box").removeClass("hidden");
    publicClient.versions.ios || $(".discount-main-title-sign").addClass("discount-main-title-signAndrod");
    sessionStorage.getItem("choose_money") != _0xec0045 && (_0x5ebec7 = _0x4c8354 = _0xf07e2f = null, sessionStorage.setItem("choose_money", _0xec0045));
    var _0x655f91 = _0xec0045;
    var _0x26a397 = _0xec0045;
    _0x5bd53a = _0x655f91;
    var _0x422abe = "";
    if ("rule" == _0xf07e2f) {
      _0x422abe = _0x22cd18(_0x4441f9[_0x5ebec7] && _0x4441f9[_0x5ebec7].operateId, _0x38a94c.discountRules);
      _0x422abe.selectFlag ? _0x4c8354 = _0x422abe.selectIndex : _0x5ebec7 = _0x4c8354 = _0xf07e2f = null;
    } else {
      if ("coupon" == _0xf07e2f) {
        var _0x20c44c = _0x5c0b1a[_0x5ebec7].operateId;
        var _0x5126ae = _0x5c0b1a[_0x5ebec7].pcardNo;
        if (_0x422abe = _0x1cdea3(_0x20c44c, _0x38a94c.discountCoupons, _0x5126ae), _0x422abe.selectFlag) {
          var _0x27340f = _0x38a94c.discountRules && _0x38a94c.discountRules.filter(function (_0x1360a6) {
            return _0x1360a6.activityShowArea != _0xae0d2d;
          });
          _0x4c8354 = _0x27340f.length + _0x422abe.selectIndex;
        } else {
          _0x5ebec7 = _0x4c8354 = _0xf07e2f = null;
        }
      }
    }
    if (_0x3ef60e && _0x3de03c.maskBoxRules.length > 0 ? $(".option").addClass("active") : (_0x3ef60e = false, $(".option").removeClass("active")), _0x219e0f ? ($(".addtion-box .img-item3").eq(0).addClass("current"), $(".addtionCheck").addClass("active"), $(".unit-order-product").removeClass("unit-order-product-active")) : (_0x219e0f = false, $(".addtionCheck").removeClass("active")), null == _0x5ebec7 && false !== _0x2812f9 && (_0x2de7bb && !_0xb3954d || (_0x19c473 && 1 == _0x19c473.choosing ? (_0xf07e2f = _0x54c559, _0x5ebec7 = _0x2812f9, _0x4c8354 = _0x19c473 && _0x19c473.checkInx) : _0x19c473 && _0x19c473.choosing > 1 && (_0xf07e2f = _0x19c473 && _0x19c473.mostObj && _0x19c473.mostObj.saleData && _0x19c473.mostObj.saleData.type, _0x5ebec7 = _0x19c473 && _0x19c473.mostObj && _0x19c473.mostObj.saleData && _0x19c473.mostObj.saleData.index, _0x4c8354 = _0x19c473 && _0x19c473.mostObj && _0x19c473.mostObj.checkInx))), _0x5ebec7 || 0 == _0x5ebec7 ? "rule" == _0xf07e2f ? ($(".cou-text").html(_0x4441f9[_0x5ebec7].saleName), $(".coupon-net").remove("no-right")) : "coupon" == _0xf07e2f && ($(".cou-text").html(_0x54a254(_0x5c0b1a[_0x5ebec7])), $(".coupon-net").remove("no-right")) : _0x2de7bb && !_0xb3954d || (_0x38a94c.discountRules.length > 0 ? (_0x4c8354 = 0, _0xf07e2f = "rule", _0x5ebec7 = $(".discount-item").eq(0).attr("index"), $(".cou-text").html(_0x4441f9[_0x5ebec7].saleName)) : _0x38a94c.discountCoupons.length > 0 ? (_0x4c8354 = 0, _0xf07e2f = "coupon", _0x5ebec7 = $(".discount-item").eq(0).attr("index"), $(".cou-text").html(_0x54a254(_0x5c0b1a[_0x5ebec7]))) : (_0x5ebec7 = _0x4c8354 = _0xf07e2f = null, _0x26576b = "", _0x1cbdea = "", $(".cou-text").html("无可用").removeClass("blue"), $(".coupon-net").addClass("no-right"))), _0x432351 || $(".benefit-list > .benefit-item").children().eq(0).addClass("active"), "-1" != _0x18cd43 && "A" != _0x18cd43) {
      _0x5ebec7 = null;
      var _0x49251c = _0x4441f9[_0x18cd43];
      _0x1cbdea = _0x49251c.operateId;
      _0x36f6ac = 0 != _0x49251c.targetNoType;
      var _0x5526f3 = _0x3a91e4(Number(_0xec0045), Number(_0x49251c.saleType), _0x49251c, _0x49251c.discountFormat || "");
      _0x655f91 = _0x5526f3.pMon;
      _0x26a397 = _0x5526f3.aMon;
      _0x26576b = "";
      _0xf07e2f = "rule";
      _0x490586(_0x655f91, function (_0x1360a6) {
        _0x655f91 = _0x1360a6;
      });
      _0x5bd53a = _0x655f91;
      _0x36acae(_0x655f91, _0x49251c);
      _0x56b31e(_0x49251c);
      $(".cou-text").html("请选择").removeClass("blue");
      $(".benefit-list > .benefit-item").children().eq(0).removeClass("active");
    } else {
      (null == _0x4c8354 || "choosed" == _0x4c8354) && _0x5c4afb && _0x5c4afb.length > 0 && ($(".cou-text").html("请选择"), $(".benefit-list > .benefit-item").children().eq(0).removeClass("active"));
    }
    null != _0x5ebec7 && (_0x2de7bb && "rule" == _0xf07e2f && _0x4441f9[_0x5ebec7] && "1" == _0x4441f9[_0x5ebec7][_0x2d1286] && (_0x5ebec7 = null, _0xf07e2f = null), _0x2de7bb && "coupon" == _0xf07e2f && _0x5c0b1a[_0x5ebec7] && "1" == _0x5c0b1a[_0x5ebec7][_0x2d1286] && (_0x5ebec7 = null, _0xf07e2f = null));
    var _0x5d7a5a = _0x389e04();
    if (null != _0x5ebec7) {
      null != _0x4c8354 && $(".discount-item").removeClass("discount-itemActive").eq(Number(_0x4c8354)).addClass("discount-itemActive");
      var _0x11f655;
      if ("rule" == _0xf07e2f) {
        var _0x49251c = _0x4441f9[_0x5ebec7];
        _0x11f655 = _0x49251c;
        _0x1cbdea = _0x49251c.operateId;
        _0x36f6ac = 0 != _0x49251c.targetNoType;
        var _0x5526f3 = _0x3a91e4(Number(_0xec0045), Number(_0x49251c.saleType), _0x49251c, _0x49251c.discountFormat || "");
        _0x655f91 = _0x5526f3.pMon;
        _0x26a397 = _0x5526f3.aMon;
        _0x26576b = "";
      } else {
        if ("coupon" == _0xf07e2f) {
          var _0x49251c = _0x5c0b1a[_0x5ebec7];
          _0x11f655 = _0x49251c;
          _0x1cbdea = _0x49251c.operateId;
          _0x26576b = _0x49251c.pCardNo || _0x49251c.pcardNo;
          var _0x5526f3 = _0x217c1a(Number(_0xec0045), Number(_0xec0045), _0x49251c.saleType, _0x49251c.discountFormat || 0, _0x49251c.saleCode, _0x49251c.capDiscount);
          _0x655f91 = _0x5526f3.pMon;
          _0x26a397 = _0x5526f3.aMon;
        }
      }
      _0x490586(_0x655f91, function (_0x1360a6) {
        _0x655f91 = _0x1360a6;
      });
      _0x36acae(_0x655f91, _0x11f655);
      _0x56b31e(_0x11f655);
      _0x5bd53a = _0x655f91;
      (!_0x27ccc2 && 0 != _0x27ccc2 || !_0x3c031b && 0 != _0x3c031b) && _0x29e23f();
    } else {
      _0x29e23f();
      _0x490586(_0x655f91, function (_0x1360a6) {
        "-1" != _0x18cd43 && "A" != _0x18cd43 || (_0x655f91 = _0x1360a6, _0x5bd53a = _0x1360a6, _0x36acae(_0x655f91, {}), _0x56b31e({}));
      });
    }
    if (_0x3ef60e && _0x3de03c.maskBoxRules.length > 0) {
      var _0x2ea86d = _0x3de03c.maskBoxRules && _0x3de03c.maskBoxRules[0] && _0x3de03c.maskBoxRules[0].price || 0;
      _0x4a8f3e = _0x56f2a8[0].operateId;
      _0x5d37ac = Number(_0x2ea86d);
      _0x3c3c8b = "8";
      _0x655f91 = _0x10f63a(Number(_0xec0045), Number(_0x655f91), _0x3de03c.maskBoxRules[0]);
    }
    _0x3ef60e && $(".recharge-arrival").html("到账金额" + publicClient.floating(_0x26a397) + "元和一次拆盲盒权益机会");
    0 == _0xec0045 || null == _0x2225e4 ? _0x3654e7() : _0x1286c9 && _0x573a02();
    var _0x291c2e = true;
    if ($("#payMoney").html(publicClient.floating(_0x655f91)), $("#amoMoney").html(publicClient.floating(_0x26a397)), _0x219e0f && _0xe5922b.addtionBoxRules.length > 0) {
      $("#payMoney").html(publicClient.floating(Number(_0x5bd53a) + Number(_0x38715f.price)));
      $(".buttonShowAddText").removeClass("hidden");
      $("#buttonShowAddText").html("到账金额" + _0x26a397 + "元和您选购的权益");
    } else {
      if ("-1" != _0x31d566) {
        var _0x48446d = _0x110885[_0x31d566] || {};
        _0x4a8f3e = _0x48446d.operateId;
        _0x5d37ac = _0x48446d.price;
        "12" == _0x48446d.saleType ? (_0x655f91 = _0x48446d.payCdgAmout, _0x26a397 = _0x48446d.chargeCdgAmout, $("#payMoney").html(publicClient.floating(_0x655f91)), $("#amoMoney").html(publicClient.floating(_0x26a397)), _0x291c2e = false, $(".benefit-item >.coupon").removeClass("active").addClass("item-disable"), $(".youhui").removeClass("youhui-normal").removeClass("youhui-default").addClass("youhui-not-use")) : (_0x3c3c8b = "7", "8" == _0x48446d.activityType && (_0x3c3c8b = "6"), $("#payMoney").html(publicClient.floating(Number(_0x5bd53a) + Number(_0x48446d.price || 0))), $(".buttonShowAddText").removeClass("hidden"), $("#buttonShowAddText").html("到账金额" + _0x26a397 + "元和" + _0x48446d.saleName));
      } else {
        _0x20d200 ? (_0x3c3c8b = "5", _0x4a8f3e = _0x269b4b[0].operateId, _0x5d37ac = 0, $(".buttonShowAddText").removeClass("hidden"), $("#buttonShowAddText").html("到账金额" + _0x26a397 + "元和" + _0x269b4b[0].saleName)) : $(".buttonShowAddText").addClass("hidden");
      }
    }
    _0x291c2e && (null != _0x4c8354 && _0x4c8354 == (_0x19c473 && _0x19c473.checkInx) ? "-1" != _0x18cd43 && "A" != _0x18cd43 ? $(".youhui").removeClass("youhui-default").addClass("youhui-normal") : $(".youhui").removeClass("youhui-normal").addClass("youhui-default") : $(".youhui").removeClass("youhui-default").addClass("youhui-normal"));
    0 == _0x5d7a5a && $(".youhui-normal, .youhui-default").removeClass("youhui-normal youhui-default");
    _0x2b1164 && _0x2b1164 == _0x2225e4 && _0x1a1e8b && (_0x23e0cd(), _0x1a1e8b = false);
  }
  function _0x403563() {
    if (_0x269b4b.length > 0) {
      if (_0x2de7bb && "1" == _0x269b4b[0][_0x2d1286]) {
        $(".preferential-pack-box").hasClass("hidden") || $(".preferential-pack-box").addClass("hidden");
        _0x20d200 = false;
      } else {
        $(".preferential-pack-box").removeClass("hidden");
        var _0x1360a6 = $("#sqbPack").html();
        _0x269b4b[0].xdsSqbButton = _0x269b4b[0].xdsSqbButton || "开通省钱包";
        var _0x432351 = juicer(_0x1360a6, {
          showType: _0x269b4b[0].sqbShow,
          sqbBoxChecked: _0x20d200,
          evestr: _0x26a064,
          item: _0x269b4b[0]
        });
        $(".preferential-pack-box").html(_0x432351);
        _0x2cbecf("1" == _0x269b4b[0].sqbShow ? ".preferential-pack-down" : ".preferential-img");
      }
    } else {
      $(".preferential-pack-box").hasClass("hidden") || $(".preferential-pack-box").addClass("hidden");
    }
  }
  function _0x372f21(_0x1360a6, _0x432351, _0xb3954d) {
    var _0x5ce772 = "";
    if (_0x5ce772 = _0x1360a6.concat(_0x432351).reduce(function (_0x1360a6, _0x432351, _0xb3954d) {
      (_0x432351.labelDes || _0x432351.marketName) && (_0x432351.weights && _0x432351.weights > _0x1360a6.weights ? (_0x1360a6.weights = _0x432351.weights, _0x1360a6.labelDes = _0x432351.labelDes || _0x432351.marketName) : "" == _0x1360a6.labelDes && (_0x1360a6.labelDes = _0x432351.labelDes || _0x432351.marketName));
      return _0x1360a6;
    }, {
      labelDes: "",
      weights: 0
    }).labelDes, _0x5ce772 || (_0x5ce772 = $(_0xb3954d).attr("gearlabel")), !_0x5ce772 && "1" == _0x515ffc) {
      var _0x13ad6e = _0x432351.length;
      _0x5ce772 = _0x13ad6e > 0 ? _0x13ad6e + "张券可用" : "";
    }
    return _0x5ce772;
  }
  function _0x56b31e(_0x1360a6) {
    try {
      var _0x432351 = JSON.parse(JSON.stringify(_0x1360a6 || {}));
      0 == Object.keys(_0x432351).length && (_0x432351 = _0x5c3113());
      $(".recharge-btn .iop-operation-text").html(_0x432351 && _0x432351.payButtonLabel || "");
      _0x432351 && _0x432351.payButtonLabel ? $(".recharge-btn .iop-operation-tab").removeClass("hidden") : $(".recharge-btn .iop-operation-tab").addClass("hidden");
    } catch (_0x17b67b) {}
  }
  function _0x5c3113() {
    var _0x1360a6 = {};
    _0x2de7bb && (_0x1360a6 = (_0x546c96.canUsePoint && _0x546c96.canUsePoint.filter(function (_0x1360a6) {
      return _0x1360a6.index == parseInt(_0x247bbf);
    }) || [])[0] || {});
    return _0x1360a6;
  }
  function _0x36acae(_0x1360a6, _0x432351) {
    try {
      $(".num-item").each(function (_0xb3954d, _0x5ce772) {
        if (_0xb3954d != _0x14fb03) {
          if ($(_0x5ce772).hasClass("active")) {
            var _0x13ad6e = _0x432351.labelDes || _0x432351.marketName || "";
            if (0 == Object.keys(_0x432351).length) {
              var _0x57ee71 = _0x5c3113();
              _0x13ad6e = _0x57ee71.labelDes || "";
            }
            $(_0x5ce772).children(".tag").html(_0x13ad6e);
            $(_0x5ce772).children(".sale-money").children(".saleNum").html(parseFloat(_0x1360a6).toFixed(2));
          } else {
            if (!$(_0x5ce772).hasClass("active")) {
              var _0x112757 = _0x39e0f0($(_0x5ce772).children(".money").attr("real-val")).ruleUse;
              var _0x4f7a33 = _0x3dbf2b($(_0x5ce772).children(".money").attr("real-val")).dataColor;
              $(_0x5ce772).children(".tag").html(_0x372f21(_0x112757, _0x4f7a33, _0x5ce772));
              var _0x232a41;
              var _0xd89ed2;
              var _0x1509b2 = Number($(_0x5ce772).children(".money").attr("real-val"));
              var _0x27340f = _0x4043fe(_0x112757, _0x4f7a33, _0x1509b2);
              var _0xb9ded1 = "";
              if (_0x27340f && _0x27340f.choosing > 1 ? (_0xb9ded1 = _0x27340f && _0x27340f.mostObj && _0x27340f.mostObj.saleData && _0x27340f.mostObj.saleData.type, _0x232a41 = _0x27340f && _0x27340f.mostObj && _0x27340f.mostObj.saleData) : (_0xb9ded1 = _0x27340f && _0x27340f.saleData && _0x27340f.saleData.type, _0x232a41 = _0x27340f && _0x27340f.saleData), "rule" == _0xb9ded1) {
                var _0x19c473 = _0x3a91e4(_0x1509b2, Number(_0x232a41.saleType), _0x232a41, _0x232a41.discountFormat || "");
                _0xd89ed2 = _0x19c473.pMon;
              } else {
                if ("coupon" == _0xb9ded1) {
                  var _0x54c559 = _0x217c1a(_0x1509b2, _0x1509b2, _0x232a41.saleType, _0x232a41.discountFormat || 0, _0x232a41.saleCode, _0x232a41.capDiscount, _0x1509b2);
                  _0xd89ed2 = _0x54c559.pMon;
                }
              }
              $(_0x5ce772).children(".sale-money").children(".saleNum").html(_0xd89ed2);
            }
          }
        }
      });
    } catch (_0x3a7404) {}
  }
  function _0x54a254(_0x1360a6) {
    if (_0x1360a6.couponValue) {
      return "hf0002" == (_0x1360a6.pCardType || _0x1360a6.pcardType) || "hf0008" == (_0x1360a6.pCardType || _0x1360a6.pcardType) ? 1000 * Number(_0x1360a6.couponValue) / 100 + "折" + (_0x1360a6.pCardName || _0x1360a6.pcardName) : "hf0003" == (_0x1360a6.pCardType || _0x1360a6.pcardType) ? _0x1360a6.couponValue + "%" + (_0x1360a6.pCardName || _0x1360a6.pcardName) : "hf0009" == (_0x1360a6.pCardType || _0x1360a6.pcardType) ? _0x1360a6.pCardName || _0x1360a6.pcardName || "充值优惠券" : _0x1360a6.couponValue + "元" + (_0x1360a6.pCardName || _0x1360a6.pcardName);
    }
    var _0x432351 = _0x1360a6.pCardName || _0x1360a6.pcardName;
    "hf0009" == (_0x1360a6.pCardType || _0x1360a6.pcardType) && (_0x432351 = _0x432351 || "充值优惠券");
    return _0x432351;
  }
  function _0x158191(_0x1360a6, _0x432351) {
    var _0xb3954d = "saveRechargeOrder";
    "" != _0x2b1164 && _0x2b1164 != _0x1360a6.cellNum ? _0xb3954d = "saveRechargeOrder4t" : "-1" != _0x31d566 && (_0xb3954d = "saveorderadd");
    var _0x5ce772 = JSON.stringify(_0x1360a6);
    recharge_H5module_inner[_0xb3954d]({
      userInfo: _0x26ca50,
      reqBody: _0x1360a6,
      noEncrypt: true,
      success: function (_0x1360a6) {
        publicClient.closeLoadPlug();
        _0x91dc47(_0x1360a6, _0x432351);
      },
      error: function (_0x1360a6) {
        _0x10547f++;
        _0x10547f >= 3 ? (_0x573a02(), publicClient.closeLoadPlug(), _0x10547f = 0, publicClient.showDialogPlug("现在办理业务的小伙伴太热情了，网络有点忙，请稍后再来。", "知道了")) : _0x158191(JSON.parse(_0x5ce772), _0x432351);
      }
    });
  }
  function _0x91dc47(_0x432351, _0xb3954d) {
    if (_0x573a02(), _0x44cbe1 = null, "000000" == _0x432351.retCode) {
      $(".rechargeGraphic-close").length && $(".rechargeGraphic-close").trigger("click", "no");
      document.addEventListener("visibilitychange", _0x52c404, true);
      _0x432351.data = _0x432351.data || {};
      "250" == _0x56d11a && _0x432351.data.payUrl && _0x432351.data.payUrl.indexOf("jssyt_stq") > -1 ? _0x4b93d3(_0x432351.data.payUrl) : publicClient.setRechargeSDK(_0x26ca50, _0x432351.data.orderId, Number(_0x432351.data.amount), Number(_0x432351.data.chargeMoney), _0x2225e4);
      _0x8c9bd2();
    } else {
      if ($(".rechargeGraphic-prompt").hasClass("hidden") || $(".rechargeGraphic-prompt").addClass("hidden"), "532014" == _0x432351.retCode || "532015" == _0x432351.retCode || "532016" == _0x432351.retCode) {
        _0x8c9bd2();
        _0x3654e7();
        "532014" == _0x432351.retCode && (_0x432351.retMsg = "尊敬的用户，该优惠仅限本机充值使用。");
        _0x2b1164 ? publicClient.showDialogPlug(_0x432351.retMsg, "知道了") : ($("#customAmount").trigger("blur"), publicClient.closeLoadPlug(), publicClient.confirmPlug("登录", "取消", _0x432351.retMsg, function () {
          cmcc.showLogin();
        }, ""));
      } else {
        if ("500004" == _0x432351.retCode) {
          cmcc.overTime({
            debug: false,
            success: function (_0x1360a6) {}
          });
        } else {
          if ("535005" == _0x432351.retCode || "532004" == _0x432351.retCode || "532005" == _0x432351.retCode) {
            _0x8c9bd2();
            _0x3654e7();
            "535005" == _0x432351.retCode && (_0x432351.retMsg = "今日优惠已抢完，感谢您使用中国移动客户端");
            publicClient.singleButBack(_0x432351.retMsg, "查看其他优惠", function () {
              $(".discounted-main").removeClass("hidden");
            });
          } else {
            if ("535001" == _0x432351.retCode || "531025" == _0x432351.retCode) {
              _0x8c9bd2();
              _0x3654e7();
              "535001" == _0x432351.retCode && (_0x432351.retMsg = "尊敬的用户，您在该活动中存在未支付的订单，您可到充值订单中查询订单信息并完成支付，或者30分钟后重新下单。");
              var _0x5ce772 = "";
              publicClient.confirmPlug("去支付", "取消", _0x432351.retMsg, function () {
                parseFloat(_0x26ca50.version) > 4.3 ? _0x5ce772 = "https://h.app.coc.10086.cn/cmcc-app/app-pages/orderList.html" : (_0x5ce772 = "https://app.10086.cn/leadeon-cmcc-static/v2.0/pages/mall/order/orderlist.html?tab=1", _0x1360a6.location.href.indexOf("gray") > -1 && (_0x5ce772 = _0x5ce772.replace("leadeon-cmcc-static/", "leadeon-cmcc-static-test/")));
                cmcc.newWebview({
                  debug: false,
                  markID: "",
                  type: "",
                  funCode: "",
                  bizCode: "",
                  url: _0x5ce772,
                  success: function (_0x1360a6) {},
                  error: function (_0x1360a6) {}
                });
              }, "");
            } else {
              "530002" == _0x432351.retCode ? (_0x8c9bd2(), _0x3654e7(), publicClient.showDialogPlug("尊敬的用户，您的充值操作过于频繁，请30分钟后再试。", "知道了")) : "531013" == _0x432351.retCode || "531014" == _0x432351.retCode ? publicClient.toastPlug("拉起支付失败，请重新尝试。", 2000) : "532018" == _0x432351.retCode ? publicClient.toastPlug(_0x432351.retMsg, 2000) : "531001" == _0x432351.retCode || "531012" == _0x432351.retCode ? (_0x8c9bd2(), _0x3654e7(), publicClient.showDialogPlug("尊敬的用户，请输入正确的移动手机号码。", "知道了")) : "531007" == _0x432351.retCode ? (_0x8c9bd2(), _0x3654e7(), publicClient.showDialogPlug("尊敬的用户，请进行实名制认证后再来充值。", "知道了")) : "531009" == _0x432351.retCode ? (_0x8c9bd2(), _0x3654e7(), publicClient.showDialogPlug("尊敬的用户，您的充值金额超过限额，请重新输入。", "知道了")) : "532002" == _0x432351.retCode ? (_0x8c9bd2(), publicClient.showDialogPlug("尊敬的用户，无优惠金额有误，请重新选择金额。", "知道了")) : "532003" == _0x432351.retCode ? (_0x8c9bd2(), publicClient.showDialogPlug("尊敬的用户，当前档位有默认优惠，请重新选择优惠信息。", "知道了")) : "533001" == _0x432351.retCode ? (_0x8c9bd2(), publicClient.showDialogPlug("尊敬的用户，订单提交失败，请您稍后再试。", "知道了")) : "500021" == _0x432351.retCode ? (_0x8c9bd2(), $(".rechargeSms-prompt").removeClass("hidden"), $(".rechargeSms-code").val(""), $(".rechargeSms-message").text(_0x432351.retMsg)) : "500022" == _0x432351.retCode ? (_0x8c9bd2(), $(".rechargeSms-prompt").removeClass("hidden"), $(".rechargeSms-code").val(""), $(".rechargeSms-message").text(_0x432351.retMsg)) : "500023" == _0x432351.retCode ? (_0x8c9bd2(), $(".rechargeSms-prompt").removeClass("hidden"), $(".rechargeSms-message").text(_0x432351.retMsg), $(".rechargeSms-btnDouble").addClass("hidden"), $(".rechargeSms-btnSingle").removeClass("hidden"), $(".rechargeSms-code").attr("disabled", true).val(""), _0x5c9b6c && clearInterval(_0x5c9b6c), $(".rechargeSms-codeBtn").text("重新获取").addClass("disable rechargeSms-gray"), _0x3654e7()) : "531019" == _0x432351.retCode ? (_0x8c9bd2(), $(".rechargeGraphic-prompt").removeClass("hidden"), $(".rechargeGraphic-message").text(_0x432351.retMsg)) : "531020" == _0x432351.retCode ? (_0x8c9bd2(), $(".rechargeGraphic-prompt").removeClass("hidden"), $(".rechargeGraphic-message").text(_0x432351.retMsg)) : "531021" == _0x432351.retCode ? (_0x8c9bd2(), publicClient.toastPlug(_0x432351.retMsg, 2000)) : "531034" == _0x432351.retCode ? publicClient.getOtherNameCheckComponent(_0x2225e4, function (_0x1360a6) {
                _0x493404 = _0x1360a6;
                _0x258add(_0xb3954d);
              }) : "531015" == _0x432351.retCode ? publicClient.toastPlug("下单操作频繁，请稍后再试。", 2000) : "531022" == _0x432351.retCode ? (publicClient.toastPlug(_0x432351.retMsg || "系统检测到您的充值环境异常，无法进行正常充值，请退出APP重新登录或切换网络重试", 2000), _0x3654e7()) : "510002" == _0x432351.retCode ? (publicClient.toastMsgPlug("验证码超时，请重新获取", 2000), _0x3654e7()) : "510003" == _0x432351.retCode ? (publicClient.toastMsgPlug("验证码输入错误", 2000), _0x3654e7()) : "510004" == _0x432351.retCode ? (publicClient.toastMsgPlug("验证码输入错误3次，请重新获取", 2000), _0x3654e7()) : "531023" == _0x432351.retCode || "531027" == _0x432351.retCode ? (_0x8c9bd2(), publicClient.initGraphCom(function (_0x1360a6) {
                $(".rechargeGraphic-prompt").addClass("hidden");
                _0x44cbe1 = _0x1360a6;
                $("#my-verify").empty();
                _0xb3954d ? (publicClient.showLoadPlug(), _0x258add(_0xb3954d)) : "coupon" == _0xf07e2f ? ($(".rechargeGraphic-prompt").addClass("hidden"), publicClient.singleButBack("本订单使用优惠券，下单后您需要在<span class=\"blue\">30分钟</span>内完成支付，如果操作中断，您可至<span class=\"blue\"><我的订单></span>页面继续支付或取消订单，取消后优惠券即时释放，否则优惠券将被锁定48小时哦！", "我知道了", function () {
                  publicClient.showLoadPlug();
                  _0x258add();
                })) : (publicClient.showLoadPlug(), _0x258add());
              })) : "537024" == _0x432351.retCode || "537025" == _0x432351.retCode ? publicClient.toastMsgPlug("系统繁忙，请稍后重试", 2000) : "500038" == _0x432351.retCode ? (publicClient.toastMsgPlug(_0x432351.retMsg, 1500), _0x1360a6.location.reload()) : "531037" == _0x432351.retCode ? publicClient.getCheckOtherLogin(false, _0x18c9a0) : (_0x8c9bd2(), _0x573a02(), publicClient.sessionFailurePrompt(_0x432351));
            }
          }
        }
      }
    }
  }
  function _0x7240ae(_0x432351, _0xb3954d) {
    var _0x5ce772 = {
      operateId: "33421",
      saleType: "1",
      saleCode: "0.998",
      saleName: "充值9.98折",
      saleDesc: "手机号登陆后充值任意金额均可享受9.98折优惠！",
      discountFormat: "3",
      isFixed: "1",
      usable: "0",
      tipInfo: "xxx;9.98折",
      presentType: "01",
      targetNoType: "2",
      activityType: "1",
      activityArea: "1"
    };
    _0x1360a6.location.href.indexOf("/i/gray") > -1 && (_0x5ce772.operateId = "5786");
    var _0x13ad6e = 0;
    _0x2de7bb && (_0x13ad6e = _0x5b9488);
    _0xb3954d = Number(_0xb3954d || _0xec0045) + Number(_0x13ad6e);
    var _0x57ee71 = _0x3a91e4(_0xb3954d, Number("1"), _0x5ce772, "3" || "");
    return {
      operateId: "33421",
      amount: _0x305cca(Number(_0x57ee71.pMon) - Number(_0x13ad6e), ""),
      chargeMoney: _0xec0045,
      choseMoney: _0xec0045 + "",
      numFlag: _0x432351,
      fkToken: _0x44cbe1,
      channel: "11",
      payWay: "SDK",
      appUid: _0x1e74b6,
      uid: _0x1e74b6,
      appImei: _0x26ca50.imei,
      wtAc: _0x49371d,
      wtAcId: _0x52e966
    };
  }
  function _0x258add(_0x432351) {
    _0x244a61 = _0x3c9259 && _0x3c9259 == _0x2225e4 ? "1" : "";
    var _0xb3954d = {};
    _0x2d1915 && (_0x2b1164 = _0x2a2c6f, _0x813e0d = _0x3d9080);
    var _0x5ce772 = (_0x3936d4 ? _0x3936d4 + "-" : "10-") + _0x26ca50.loginProvince + "-" + _0x26ca50.loginCity + "-" + (_0x48ff75 || _0x26ca50.phoneNumber);
    var _0x13ad6e = _0x2de7bb ? _0x5b9488 : 0;
    if (_0xb3954d = {
      operateId: _0x1cbdea,
      amount: Number(_0x5bd53a),
      serialNo: _0x17904f,
      smsCode: _0x5ee3f5,
      chargeMoney: _0x305cca(Number($("#amoMoney").text()) - Number(_0x13ad6e), ""),
      choseMoney: _0xec0045 + "",
      pCardNo: _0x26576b || "",
      numFlag: _0x244a61,
      additionOperateId: _0x4a8f3e,
      additionAmount: _0x5d37ac,
      additionType: _0x3c3c8b,
      reConfirmWay: _0x80745a,
      fkToken: _0x44cbe1,
      lastCharOfName: _0x493404,
      channel: "11",
      payWay: "SDK",
      pointId: _0x2de7bb ? _0x93b9bd : null,
      pointNum: _0x2de7bb ? _0x5906db : null,
      pointFee: _0x2de7bb ? _0x5b9488 : null,
      invoinceType: _0x5e83b8,
      appUid: _0x1e74b6,
      uid: _0x1e74b6,
      appImei: _0x26ca50.imei,
      wtAc: _0x49371d,
      wtAcId: _0x52e966
    }, _0x493404 = null, _0xb3954d.serialNo = _0x219e0f || "-1" != _0x31d566 || _0x20d200 ? _0x17904f : _0x361c0c, publicClient.getQueryString("channel") && "sign" == publicClient.getQueryString("channel") && (_0xb3954d.source = _0x5ce772), _0x5a64ee.includes(_0x56d11a) && _0x4caf29(_0xb3954d), _0x432351 == _0x3b1770) {
      var _0x57ee71 = _0x7240ae(_0x244a61, _0xb3954d.amount);
      _0xb3954d.discountId = _0x57ee71.operateId;
      _0xb3954d.amount = _0x57ee71.amount;
      publicClient.getQueryString("channel") && "sign" == publicClient.getQueryString("channel") && (_0xb3954d.source = _0x5ce772);
    }
    if (publicClient.getQueryString("busijumpdata")) {
      var _0x112757 = publicClient.getQueryString("busijumpdata");
      _0xb3954d.xdsLinkWard = _0x112757;
    }
    var _0x4f7a33 = _0x19c413 || "123456";
    var _0x232a41 = "107,107,57,110,53,52,86,104,50,66,99,56,97,88,67,104,76,72,89,80,84,81,61,61";
    var _0xd89ed2 = _0x1360a6.recharge_H5module_inner.byteToString(_0x232a41.split(","));
    var _0x1509b2 = _0x117d29(_0x14d417, _0x2eba40)(JSON.stringify(_0xb3954d), _0xd89ed2, _0x4f7a33);
    var _0x27340f = _0xf89011(JSON.stringify(_0xb3954d));
    var _0xb9ded1 = {
      cellNum: _0x2225e4,
      payhmcc: _0x1509b2,
      param: _0x27340f
    };
    _0x158191(_0xb9ded1, _0x432351);
  }
  function _0x217c1a(_0x1360a6, _0x432351, _0xb3954d, _0x5ce772, _0x13ad6e, _0x57ee71, _0x112757) {
    for (var _0x4f7a33 = _0x112757 || _0xec0045, _0x232a41 = _0x13ad6e.split(","), _0xd89ed2 = 0, _0x1509b2 = 0; _0x1509b2 < _0x232a41.length; _0x1509b2++) {
      var _0x27340f = _0x232a41[_0x1509b2].split(":")[1];
      var _0xb9ded1 = _0x232a41[_0x1509b2].split(":")[0].split("~")[1];
      var _0x19c473 = _0x232a41[_0x1509b2].split(":")[0].split("~")[0];
      Number(_0x4f7a33) >= _0x19c473 && Number(_0x4f7a33) <= _0xb9ded1 && (_0xd89ed2 = _0x27340f);
    }
    var _0x54c559 = _0x1360a6;
    var _0x2812f9 = _0x432351;
    7 == _0xb3954d ? _0x2812f9 = Number(_0x432351) + Number(_0xd89ed2) : 8 == _0xb3954d ? (_0x54c559 = Number(_0x1360a6) * Number(_0xd89ed2), null != _0x57ee71 && undefined !== _0x57ee71 && Number(_0x57ee71) / 100 < Number(_0x1360a6) * (1 - Number(_0xd89ed2)) && (_0x54c559 = Number(_0x1360a6) - Number(_0x57ee71) / 100)) : 9 == _0xb3954d ? _0x2812f9 = Number(_0x4f7a33) * Number(_0xd89ed2) + Number(_0x432351) : 10 == _0xb3954d && (_0x54c559 = Number(_0x1360a6) - Number(_0xd89ed2));
    _0x54c559 = _0x305cca(_0x54c559, _0x5ce772 || "");
    _0x2812f9 = _0x305cca(_0x2812f9, _0x5ce772 || "");
    return {
      pMon: _0x54c559,
      aMon: _0x2812f9
    };
  }
  function _0x502dad(_0x1360a6) {
    var _0x432351 = "";
    var _0xb3954d = "";
    var _0x5ce772 = new Array();
    var _0x13ad6e = new Array();
    var _0x57ee71 = new Array();
    var _0x112757 = new Array();
    _0x432351 = _0x1360a6.split(",");
    for (var _0x4f7a33 = 0; _0x4f7a33 < _0x432351.length; _0x4f7a33++) {
      _0xb3954d = _0x432351[_0x4f7a33].toString().split(":");
      _0x13ad6e.push(_0xb3954d[0]);
      _0x5ce772.push(_0xb3954d[1]);
    }
    for (var _0x4f7a33 = 0; _0x4f7a33 < _0x13ad6e.length; _0x4f7a33++) {
      _0xb3954d = _0x13ad6e[_0x4f7a33].toString().split("~");
      _0x57ee71.push(_0xb3954d[0]);
      _0x112757.push(_0xb3954d[1]);
    }
    return {
      min: _0x57ee71,
      max: _0x112757,
      dis: _0x5ce772
    };
  }
  function _0x305cca(_0x1360a6, _0x432351) {
    "3" == _0x432351 || "" == _0x432351 ? (_0x1360a6 = Math.round((100 * _0x1360a6).toFixed(5)) / 100, _0x1360a6 = publicClient.floating(_0x1360a6)) : "2" == _0x432351 ? (_0x1360a6 = Math.floor((100 * _0x1360a6).toFixed(5)) / 100, _0x1360a6 = publicClient.floating(_0x1360a6)) : "1" == _0x432351 && (_0x1360a6 = Math.ceil((100 * _0x1360a6).toFixed(5)) / 100, _0x1360a6 = publicClient.floating(_0x1360a6));
    return _0x1360a6;
  }
  function _0x3a91e4(_0x1360a6, _0x432351, _0xb3954d, _0x5ce772) {
    var _0x13ad6e = "";
    var _0x57ee71 = _0x1360a6;
    var _0x112757 = _0x1360a6;
    switch (_0x432351) {
      case 1:
        _0x13ad6e = _0xb3954d.saleCode;
        _0x57ee71 = 1000 * Number(_0x13ad6e) * _0x1360a6 / 1000;
        break;
      case 2:
        _0x13ad6e = _0x502dad(_0xb3954d.saleCode);
        for (var _0x4f7a33 = 0; _0x4f7a33 < _0x13ad6e.dis.length; _0x4f7a33++) {
          _0x1360a6 >= Number(_0x13ad6e.min[_0x4f7a33]) && _0x1360a6 <= Number(_0x13ad6e.max[_0x4f7a33]) && (_0x112757 = _0x1360a6 + Number(_0x13ad6e.dis[_0x4f7a33]));
        }
        break;
      case 3:
        var _0x232a41 = _0xb3954d.saleCode.split("@");
        var _0xd89ed2 = _0x232a41[0];
        _0x13ad6e = _0x502dad(_0x232a41[1]);
        for (var _0x4f7a33 = 0; _0x4f7a33 < _0x13ad6e.dis.length; _0x4f7a33++) {
          _0x1360a6 >= Number(_0x13ad6e.min[_0x4f7a33]) && _0x1360a6 <= Number(_0x13ad6e.max[_0x4f7a33]) && (_0x112757 = _0x1360a6 + Number(_0x13ad6e.dis[_0x4f7a33]));
          _0x57ee71 = 1000 * Number(_0xd89ed2) * _0x1360a6 / 1000;
        }
        break;
      case 4:
        _0x13ad6e = _0x502dad(_0xb3954d.saleCode);
        for (var _0x4f7a33 = 0; _0x4f7a33 < _0x13ad6e.dis.length; _0x4f7a33++) {
          _0x1360a6 >= Number(_0x13ad6e.min[_0x4f7a33]) && _0x1360a6 <= Number(_0x13ad6e.max[_0x4f7a33]) && (_0x112757 = _0x1360a6 + 1000 * Number(_0x13ad6e.dis[_0x4f7a33]) * _0x1360a6 / 1000);
        }
        break;
      case 5:
        _0x13ad6e = _0x502dad(_0xb3954d.saleCode);
        for (var _0x4f7a33 = 0; _0x4f7a33 < _0x13ad6e.dis.length; _0x4f7a33++) {
          _0x1360a6 >= Number(_0x13ad6e.min[_0x4f7a33]) && _0x1360a6 <= Number(_0x13ad6e.max[_0x4f7a33]) && (_0x57ee71 = 1000 * Number(_0x13ad6e.dis[_0x4f7a33]) * _0x1360a6 / 1000);
        }
        break;
      case 6:
        for (var _0x232a41 = _0xb3954d.saleCode.split("@"), _0x1509b2 = _0x502dad(_0x232a41[0]), _0x27340f = _0x502dad(_0x232a41[1]), _0x4f7a33 = 0; _0x4f7a33 < _0x1509b2.dis.length; _0x4f7a33++) {
          _0x1360a6 >= Number(_0x1509b2.min[_0x4f7a33]) && _0x1360a6 <= Number(_0x1509b2.max[_0x4f7a33]) && (_0x57ee71 = 1000 * Number(_0x1509b2.dis[_0x4f7a33]) * _0x1360a6 / 1000);
        }
        for (var _0x4f7a33 = 0; _0x4f7a33 < _0x27340f.dis.length; _0x4f7a33++) {
          _0x1360a6 >= Number(_0x27340f.min[_0x4f7a33]) && _0x1360a6 <= Number(_0x27340f.max[_0x4f7a33]) && (_0x112757 = _0x1360a6 + Number(_0x27340f.dis[_0x4f7a33]));
        }
        break;
      case 14:
        _0x13ad6e = _0x502dad(_0xb3954d.saleCode);
        for (var _0x4f7a33 = 0; _0x4f7a33 < _0x13ad6e.dis.length; _0x4f7a33++) {
          _0x1360a6 >= Number(_0x13ad6e.min[_0x4f7a33]) && _0x1360a6 <= Number(_0x13ad6e.max[_0x4f7a33]) && (_0x13ad6e.dis[_0x4f7a33] = 1, _0x57ee71 = 1000 * Number(_0x13ad6e.dis[_0x4f7a33]) * _0x1360a6 / 1000);
        }
        _0x57ee71 -= (_0xb3954d.presentCode || "").split("|")[1] || 0;
    }
    _0x57ee71 = _0x305cca(_0x57ee71, _0x5ce772);
    _0x112757 = _0x305cca(_0x112757, _0x5ce772);
    return {
      pMon: _0x57ee71,
      aMon: _0x112757
    };
  }
  function _0x10f63a(_0x1360a6, _0x432351, _0xb3954d) {
    var _0x5ce772 = _0x432351;
    var _0x13ad6e = "";
    switch (_0xb3954d.saleType + "") {
      case "11":
        _0x13ad6e = _0x502dad(_0xb3954d.saleCode);
        for (var _0x57ee71 = 0; _0x57ee71 < _0x13ad6e.dis.length; _0x57ee71++) {
          _0x1360a6 >= Number(_0x13ad6e.min[_0x57ee71]) && _0x1360a6 <= Number(_0x13ad6e.max[_0x57ee71]) && (_0x5ce772 = _0x432351 + Number(_0x13ad6e.dis[_0x57ee71]));
        }
    }
    return _0x5ce772;
  }
  function _0x156486() {
    for (var _0x1360a6 = {
        maskRuleUse: [],
        maskRuleNouse: []
      }, _0x432351 = 0; _0x432351 < _0x56f2a8.length; _0x432351++) {
      _0x56f2a8[_0x432351].price = "";
      var _0xb3954d = _0x502dad(_0x56f2a8[_0x432351].saleCode);
      if (_0x56f2a8[_0x432351].price = Number(_0xb3954d.dis[0]).toFixed(2), "0" == _0x56f2a8[_0x432351].usable) {
        for (var _0x5ce772 = false, _0x13ad6e = 0; _0x13ad6e < _0xb3954d.max.length; _0x13ad6e++) {
          if (Number(_0xec0045) >= Number(_0xb3954d.min[_0x13ad6e]) && Number(_0xec0045) <= Number(_0xb3954d.max[_0x13ad6e])) {
            _0x5ce772 = true;
            break;
          }
        }
        _0x5ce772 ? _0x1360a6.maskRuleUse.push(_0x56f2a8[_0x432351]) : _0x1360a6.maskRuleNouse.push(_0x56f2a8[_0x432351]);
      } else {
        _0x1360a6.maskRuleNouse.push(_0x56f2a8[_0x432351]);
      }
    }
    return _0x1360a6;
  }
  function _0x51c8f5() {
    for (var _0x1360a6 = {
        addtionRuleUse: [],
        addtionRuleNouse: []
      }, _0x432351 = 0; _0x432351 < _0x2a2d34.length; _0x432351++) {
      _0x2a2d34[_0x432351].price = "";
      var _0xb3954d = _0x502dad(_0x2a2d34[_0x432351].saleCode);
      if (_0x2a2d34[_0x432351].price = Number(_0xb3954d.dis[0]).toFixed(2), "0" == _0x2a2d34[_0x432351].usable) {
        for (var _0x5ce772 = false, _0x13ad6e = 0; _0x13ad6e < _0xb3954d.max.length; _0x13ad6e++) {
          if (Number(_0xec0045) >= Number(_0xb3954d.min[_0x13ad6e]) && Number(_0xec0045) <= Number(_0xb3954d.max[_0x13ad6e])) {
            _0x5ce772 = true;
            break;
          }
        }
        _0x5ce772 ? _0x1360a6.addtionRuleUse.push(_0x2a2d34[_0x432351]) : _0x1360a6.addtionRuleNouse.push(_0x2a2d34[_0x432351]);
      } else {
        _0x1360a6.addtionRuleNouse.push(_0x2a2d34[_0x432351]);
      }
    }
    return _0x1360a6;
  }
  function _0x5b2915(_0x1360a6, _0x432351) {
    var _0xb3954d = false;
    var _0x5ce772 = _0x502dad(_0x2a2d34[_0x1360a6].saleCode);
    if ("0" == _0x2a2d34[_0x1360a6].usable) {
      for (var _0x13ad6e = 0; _0x13ad6e < _0x5ce772.max.length; _0x13ad6e++) {
        if (Number(_0x432351) >= Number(_0x5ce772.min[_0x13ad6e]) && Number(_0x432351) <= Number(_0x5ce772.max[_0x13ad6e])) {
          _0xb3954d = true;
          break;
        }
      }
    } else {
      _0xb3954d = false;
    }
    return _0xb3954d;
  }
  function _0x3dbf2b(_0x1360a6) {
    var _0x432351 = {
      dataGray: [],
      dataColor: []
    };
    if (_0x5c0b1a.length > 0) {
      for (var _0xb3954d = 0; _0xb3954d < _0x5c0b1a.length; _0xb3954d++) {
        if ("0" == _0x5c0b1a[_0xb3954d].usable) {
          if (_0x2de7bb && "1" == _0x5c0b1a[_0xb3954d][_0x2d1286]) {
            _0x432351.dataGray.push(_0x5c0b1a[_0xb3954d]);
            continue;
          }
          var _0x5ce772 = _0x5c0b1a[_0xb3954d].saleCode.split(",");
          _0x5c0b1a[_0xb3954d].isAdd = false;
          for (var _0x13ad6e = 0; _0x13ad6e < _0x5ce772.length; _0x13ad6e++) {
            var _0x57ee71 = _0x5ce772[_0x13ad6e].split(":")[0].split("~");
            var _0x112757 = Number(_0x57ee71[0]);
            var _0x4f7a33 = Number(_0x57ee71[1]);
            Number(_0x1360a6 || _0xec0045) <= _0x4f7a33 && Number(_0x1360a6 || _0xec0045) >= _0x112757 && (_0x5c0b1a[_0xb3954d].isAdd = true, _0x432351.dataColor.push(_0x5c0b1a[_0xb3954d]));
          }
          _0x5c0b1a[_0xb3954d].isAdd || _0x432351.dataGray.push(_0x5c0b1a[_0xb3954d]);
        } else {
          _0x432351.dataGray.push(_0x5c0b1a[_0xb3954d]);
        }
      }
    }
    return _0x432351;
  }
  function _0x1cdea3(_0x1360a6, _0x432351, _0xb3954d) {
    var _0x5ce772 = {
      selectFlag: false,
      selectIndex: null
    };
    if (_0x432351.length > 0) {
      for (var _0x13ad6e = 0; _0x13ad6e < _0x432351.length; _0x13ad6e++) {
        _0x1360a6 == _0x432351[_0x13ad6e].operateId && _0xb3954d == _0x432351[_0x13ad6e].pcardNo && (_0x5ce772.selectIndex = _0x13ad6e, _0x5ce772.selectFlag = true);
      }
      return _0x5ce772;
    }
    return _0x5ce772;
  }
  function _0x22cd18(_0x1360a6, _0x432351) {
    var _0xb3954d = {
      selectFlag: false,
      selectIndex: null
    };
    if (_0x432351.length > 0) {
      for (var _0x5ce772 = 0, _0x13ad6e = 0; _0x13ad6e < _0x432351.length; _0x13ad6e++) {
        _0x432351[_0x13ad6e].activityShowArea == _0xae0d2d && _0x5ce772++;
        _0x1360a6 == _0x432351[_0x13ad6e].operateId && _0x432351[_0x13ad6e].activityShowArea != _0xae0d2d && (_0xb3954d.selectIndex = _0x13ad6e - _0x5ce772, _0xb3954d.selectFlag = true);
      }
      return _0xb3954d;
    }
    return _0xb3954d;
  }
  function _0x39e0f0(_0x1360a6) {
    var _0x432351 = {
      ruleUse: [],
      ruleNouse: []
    };
    if (_0x4441f9.length > 0) {
      for (var _0xb3954d = 0; _0xb3954d < _0x4441f9.length; _0xb3954d++) {
        if (0 == _0x4441f9[_0xb3954d].usable) {
          if (_0x2de7bb && "1" == _0x4441f9[_0xb3954d][_0x2d1286]) {
            _0x432351.ruleNouse.push(_0x4441f9[_0xb3954d]);
            continue;
          }
          if ("1" == _0x4441f9[_0xb3954d].saleType || "3" == _0x4441f9[_0xb3954d].saleType) {
            _0x432351.ruleUse.push(_0x4441f9[_0xb3954d]);
          } else {
            if ("2" == _0x4441f9[_0xb3954d].saleType || "4" == _0x4441f9[_0xb3954d].saleType || "5" == _0x4441f9[_0xb3954d].saleType || "6" == _0x4441f9[_0xb3954d].saleType || "14" == _0x4441f9[_0xb3954d].saleType) {
              var _0x5ce772 = "";
              if ("6" == _0x4441f9[_0xb3954d].saleType) {
                var _0x13ad6e = _0x4441f9[_0xb3954d].saleCode.split("@");
                var _0x57ee71 = _0x502dad(_0x13ad6e[0]);
                var _0x5ce772 = _0x502dad(_0x13ad6e[1]);
                _0x5ce772.max = _0x5ce772.max.concat(_0x57ee71.max);
                _0x5ce772.min = _0x5ce772.min.concat(_0x57ee71.min);
              } else {
                _0x5ce772 = _0x502dad(_0x4441f9[_0xb3954d].saleCode);
              }
              for (var _0x112757 = false, _0x4f7a33 = 0; _0x4f7a33 < _0x5ce772.max.length; _0x4f7a33++) {
                if (Number(_0x1360a6 || _0xec0045) >= Number(_0x5ce772.min[_0x4f7a33]) && Number(_0x1360a6 || _0xec0045) <= Number(_0x5ce772.max[_0x4f7a33])) {
                  _0x112757 = true;
                  break;
                }
              }
              _0x112757 ? _0x432351.ruleUse.push(_0x4441f9[_0xb3954d]) : _0x432351.ruleNouse.push(_0x4441f9[_0xb3954d]);
            }
          }
        } else {
          _0x432351.ruleNouse.push(_0x4441f9[_0xb3954d]);
        }
      }
    }
    return _0x432351;
  }
  function _0x105087(_0x1360a6) {
    if (_0x1360a6) {
      return _0x1360a6.substring(0, 4) + "-" + _0x1360a6.substring(4, 6) + "-" + _0x1360a6.substring(6, 8);
    }
  }
  function _0x75e4c8(_0x1360a6) {
    if (_0x1360a6) {
      return _0x1360a6.substring(0, 4) + "年" + _0x1360a6.substring(4, 6) + "月" + _0x1360a6.substring(6, 8) + "日";
    }
  }
  function _0x48fee0(_0x1360a6) {
    var _0x432351 = "";
    switch (_0x1360a6.toLowerCase()) {
      case "hf0001":
      case "hf0003":
        _0x432351 = "加赠券";
        break;
      case "hf0002":
        _0x432351 = "折扣券";
        break;
      case "hf0005":
        _0x432351 = "满减券";
        break;
      case "hf0007":
        _0x432351 = "立减券";
        break;
      case "hf0008":
        _0x432351 = "折扣券";
        break;
      case "hf0009":
        _0x432351 = "优惠券";
    }
    return _0x432351;
  }
  function _0x3ebfc4(_0x1360a6) {
    if (!_0x1360a6) {
      return "活动";
    }
    var _0x432351 = String(_0x1360a6);
    if (_0x432351.indexOf("|") > -1) {
      for (var _0xb3954d = _0x432351.split("|"), _0x5ce772 = false, _0x13ad6e = 0; _0x13ad6e < _0xb3954d.length; _0x13ad6e++) {
        if (_0xb3954d[_0x13ad6e].indexOf(";") > -1 && Number(_0xb3954d[_0x13ad6e].split(";")[0]) == _0xec0045) {
          _0x5ce772 = true;
          _0x432351 = _0xb3954d[_0x13ad6e].split(";")[1];
          break;
        }
      }
      _0x5ce772 || (_0x432351 = "活动");
    } else {
      _0x432351 = _0x432351.indexOf(";") > -1 ? _0x432351.split(";")[1] : _0x432351;
    }
    var _0x57ee71 = _0x432351.match(/\d/g);
    if (_0x57ee71) {
      var _0x112757 = _0x432351.substring(0, _0x432351.indexOf(_0x57ee71[0]));
      var _0x4f7a33 = _0x432351.substring(_0x432351.lastIndexOf(_0x57ee71[_0x57ee71.length - 1]) + 1);
      if (_0x432351.indexOf(".") > -1) {
        return "<span class=\"small\">" + _0x112757 + "</span><span>" + _0x432351.substring(_0x432351.indexOf(_0x57ee71[0]), _0x432351.indexOf(".")) + "</span><span class=\"small\">" + _0x432351.substring(_0x432351.indexOf(".")) + "</span>";
      }
      return "<span class=\"small\">" + _0x112757 + "</span><span>" + _0x57ee71.join("") + "</span><span class=\"small\">" + _0x4f7a33 + "</span>";
    }
    return "活动" == _0x432351 ? "<span>" + _0x432351 + "</span>" : "<span class=\"small\">" + _0x432351 + "</span>";
  }
  function _0x4c1877(_0x1360a6, _0x432351, _0xb3954d) {
    if (8 == _0x432351) {
      if ("hf0007" == _0xb3954d) {
        return "<span class=\"small\">￥</span>" + _0x1360a6;
      }
      var _0x5ce772 = 1000 * Number(_0x1360a6) / 100 + "折";
      var _0x13ad6e = "";
      _0x13ad6e = _0x5ce772.indexOf(".") > -1 ? _0x5ce772.indexOf(".") : _0x5ce772.indexOf("折");
      return _0x5ce772.substring(0, _0x13ad6e) + "<span class=\"small\">" + _0x5ce772.substring(_0x13ad6e) + "</span>";
    }
    return 7 == _0x432351 || 10 == _0x432351 ? "<span class=\"small\">￥</span>" + _0x1360a6 : 9 == _0x432351 ? "+" + _0x1360a6 + "<span class=\"small\">%</span>" : "";
  }
  function _0x152d09(_0x1360a6) {
    publicClient.showLoadPlug();
    recharge_H5module_inner.getRealFee({
      type: "get",
      userInfo: _0x26ca50,
      time: 1000,
      reqBody: {
        cellNum: _0x2b1164
      },
      success: function (_0x432351) {
        var _0xb3954d;
        var _0x5ce772;
        "000000" == _0x432351.retCode && (_0x5ce772 = _0x432351.data && (_0x432351.data.realBalanceFee || _0x432351.data.curFee), $("#balanceMoney").text(Number(_0x5ce772)), Number(_0x5ce772) < 10 && $("#balanceMoney").addClass("balanceRed"), Number(_0x5ce772) < 0 && (_0xb3954d = Math.abs(Number(_0x5ce772)), _0xb3954d < _0x4cf058 ? _0xb3954d = _0x4cf058 : _0xb3954d > _0x3975a2 && (_0xb3954d = _0x3975a2)), _0x540d2e(_0x5ce772));
        _0x2b1164 && _0x2b1164 == _0x2225e4 && "1" == _0x4270f6 ? _0xc27415(_0xb3954d) : _0xc27415();
        "function" == typeof _0x1360a6 && _0x1360a6(_0x5ce772);
        $(".balance").removeClass("hidden");
        publicClient.closeLoadPlug();
      },
      error: function (_0x432351) {
        publicClient.closeLoadPlug();
        _0xc27415();
        "function" == typeof _0x1360a6 && _0x1360a6();
      }
    });
  }
  function _0x573a02() {
    _0x9f3757 || ($(".recharge-btn,.recharge-shadow").removeClass("disable"), $(".recharge-hebao-btn").removeClass("disable"));
  }
  function _0x3654e7() {
    $(".recharge-btn,.recharge-shadow").addClass("disable");
    $(".recharge-hebao-btn").addClass("disable");
  }
  function _0x5d7e2e() {}
  function _0x2ba863(_0x1360a6) {
    var _0x432351 = navigator.userAgent;
    (_0x432351.indexOf("Android") > -1 || _0x432351.indexOf("Linux") > -1) && (_0x1360a6 ? $(".noSelect").prevAll().slideUp() : $(".noSelect").prevAll().css("display", "flex").hide().slideDown(400));
  }
  function _0x51ca5d(_0x1360a6) {
    var _0x432351 = {
      lt: "<",
      gt: ">",
      nbsp: " ",
      amp: "&",
      quot: "\""
    };
    return _0x1360a6.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (_0x1360a6, _0xb3954d) {
      return _0x432351[_0xb3954d];
    });
  }
  function _0x1a054a() {
    _0x3a0301();
    $(".num-his").off("fastClick");
    $(".num-his").on("fastClick", ".his-tel", function () {
      var _0x1360a6 = $(this).html();
      _0x2225e4 = _0x1360a6.replace(/[^\d]/g, "");
      $(".contacts-name").html("");
      _0x5d7e2e();
      _0xec44e6();
    });
    $(".num-his").on("fastClick", ".del", function (_0x1360a6) {
      _0x5f1683($(this).siblings(".his-tel").html());
      _0x1360a6.stopPropagation();
      _0x1360a6.preventDefault();
    });
    $(".tel,.edit").click(function () {
      $(".tel,.edit").addClass("hidden");
      $(".del-no").removeClass("hidden");
      $(".num-his").removeClass("hidden");
      $(".tel-input").focus();
    });
    $(".tel-input").on("focus", function () {
      (_0x26f891 || _0xb3954d()) && ($(".btn-box").css("position", "static"), $(".footer-box").addClass("hidden"));
      $(".num-his").removeClass("hidden");
      $(".tel,.edit").addClass("hidden");
      "" != $(this).val() && $(".del-no").removeClass("hidden");
    });
    $(".tel-input").off("input");
    $(".tel-input").on("input", function () {
      var _0x1360a6 = _0x611ed8($(this).val());
      if (_0x1360a6 && !(_0x1360a6.length <= 0)) {
        $(".del-no").removeClass("hidden");
        $(this).val(_0x1360a6);
        $(this).selectionEnd;
        var _0x432351 = this;
        setTimeout(function () {
          _0x432351.setSelectionRange(_0x1360a6.length, _0x1360a6.length);
        }, 0);
        _0x1360a6 && _0x1360a6.length >= 0 && _0x1360a6.length < 13 && (_0x3654e7(), _0x2225e4 = null, $(".edit").addClass("hidden"), $(".address-name").html("仅支持移动号码充值").removeClass("addActive lightBlue"), $(".contacts-name").html(""));
        _0x1360a6 && _0x1360a6.length >= 13 && (publicClient.setGdpTrace({}, "clk", {
          WT_area_type_1: "弹窗",
          WT_area_name: "号码输入框",
          XY_env_type: "button",
          WT_envName: "输入号码",
          WT_event: "P00000051686"
        }), $(this).blur(), $(".edit").removeClass("hidden"), $(".del-no").addClass("hidden"), _0x2225e4 = _0x1360a6.replace(/[^\d]/g, ""), $(".contacts-name").html(""), _0x5d7e2e(), _0xec44e6());
      }
    });
    $(".tel-input").off("blur");
    $(".tel-input").on("blur", function () {
      (_0x26f891 || _0xb3954d()) && ($(".btn-box").css("position", "sticky"), $(".footer-box").removeClass("hidden"));
      $(".num-his").addClass("hidden");
      $(this).val().length > 0 && ($(".tel,.edit").removeClass("hidden"), $(".del-no").off("click").on("click", function () {
        $(".tel-input").val("");
        $(".tel-input").focus();
      }), setTimeout(function () {
        $(".del-no").addClass("hidden");
      }, 0));
    });
    $("#AiEntrance").on("fastClick", ".AI-main", function () {
      var _0x1360a6 = $(this).attr("sceneName");
      var _0x432351 = $(this).attr("sceneNum");
      cmcc.toggleDigitalMan({
        debug: false,
        enable: true,
        left: "",
        top: "",
        right: "",
        bottom: "",
        scence: "337",
        type: "item",
        extendsInfo: JSON.stringify({
          messageType: "recommend",
          userAsk: "了解更多信息",
          sceneName: _0x1360a6,
          sceneNum: _0x432351,
          entranceType: "主动服务插件-充值",
          pCode: ""
        }),
        success: function () {},
        error: function () {}
      });
      publicClient.setGdpTrace({}, "clk", {
        WT_et: "clk",
        WT_area_type_1: "浮条",
        WT_area_name: "灵犀入口长浮条",
        WT_envName: "点击"
      });
    });
    $(".recharge_activebanner").on("fastClick", ".couponActbutton", function () {
      var _0x432351 = $(this).attr("isfstbindcard");
      publicClient.setGdpTrace({}, "clk", {
        WT_et: "clk",
        WT_area_type_1: "楼层",
        WT_area_name: "卡劵运营位",
        XY_env_type: "button",
        WT_envName: "2" == _0x432351 ? "领劵参与_未绑卡" : "领劵参与_已绑卡",
        WT_next_url: "https://ump.cmpay.com/front-msa/maktcfgh5/springFestivalBless?jrnNo=ACT3765&rulerId=NGVV3182&shareId=52&utm_source=YJDQ&utm_medium=QT&utm_term=jfsc&utm_content=11&utm_campaign=xcfd&_channel_track_key=2E4QKPsT",
        XY_gd_source: "金科"
      });
      _0x1360a6.location.assign("https://ump.cmpay.com/front-msa/maktcfgh5/springFestivalBless?jrnNo=ACT3765&rulerId=NGVV3182&shareId=52&utm_source=YJDQ&utm_medium=QT&utm_term=jfsc&utm_content=11&utm_campaign=xcfd&_channel_track_key=2E4QKPsT");
    });
    $(".other-box").fastClick(function () {
      publicClient.setGdpTrace({}, "clk", {
        WT_area_type_1: "楼层",
        WT_area_name: "号码输入框",
        XY_env_type: "button",
        WT_envName: "他人充",
        WT_event: "P00000051688"
      });
      "250" == _0x26ca50.loginProvince ? _0x4b93d3("https://wap.js.10086.cn/vw/navbar/friend_TXL?ch=7x") : cmcc.getContacts({
        debug: false,
        success: function (_0x1360a6) {
          _0x2225e4 = (_0x1360a6.phoneNum + "").replace(/[^\d]/g, "");
          "+86" == _0x2225e4.substring(0, 3) && (_0x2225e4 = _0x2225e4.substring(3));
          "86" == _0x2225e4.substring(0, 2) && (_0x2225e4 = _0x2225e4.substring(2));
          "0086" == _0x2225e4.substring(0, 4) && (_0x2225e4 = _0x2225e4.substring(4));
          _0x2225e4.length > 11 && (_0x2225e4 = _0x2225e4.substr(-11));
          _0x2225e4.length < 11 ? publicClient.toastMsgPlug("号码异常，请输入正确移动号码", 2000) : ($(".address-name").html("").removeClass("addActive lightBlue"), $(".contacts-name").html("(" + _0x1360a6.userName + ")"), setTimeout(function () {
            _0xec44e6();
          }, 200));
        },
        error: function (_0x1360a6) {}
      });
    });
    $(".num-list").on("fastClick", ".num-item", function () {
      if ($(this).attr("posval") == _0x14fb03 || !$(this).hasClass("active")) {
        if (_0x503a59 = false, _0x1a53d0 = true, $(".arrow-container").children().removeClass("active-arrow"), $(".arrow-container").children().eq($(this).attr("posval") % 3).addClass("active-arrow"), _0x18cd43 = "-1", _0x31d566 = "-1", $(this).attr("posval") == _0x14fb03) {
          _0x2de7bb = false;
          _0x247bbf = -1;
          $(".point-box-detail").hasClass("active") && $(".point-box-detail").removeClass("active");
          $(".num-item").removeClass("active");
          $(this).addClass("active");
          $(this).children(".money").addClass("hidden");
          var _0x1360a6 = this;
          var _0x432351 = navigator.userAgent;
          _0x432351.indexOf("Android") > -1 || _0x432351.indexOf("Linux") > -1 ? setTimeout(function () {
            $(_0x1360a6).children(".money-input").removeClass("hidden").focus();
          }, 5) : $(this).children(".money-input").removeClass("hidden").focus();
          _0xec0045 = $(".money-input").val();
          _0x26a397();
        } else {
          var _0xb3954d = parseInt($(this).children(".money").attr("real-val"));
          if (_0x219e0f && (_0x2c5ef3 = 0, _0x38715f = _0xe5922b.addtionRights[_0x2c5ef3], _0x38715f.additionOperateId = _0xe5922b.addtionBlindRules[_0x2c5ef3].operateId, _0x38715f.price = _0xe5922b.addtionBlindRules[_0x2c5ef3].price, !_0x5b2915(_0x2c5ef3, _0xb3954d))) {
            return void publicClient.showDialogPlug("请选择与搭售活动符合的档位", "我知道了");
          }
          if (_0xb3954d <= _0x3975a2 && _0xb3954d >= _0x4cf058 || $(this).hasClass("num-item-gear-one")) {
            _0xec0045 = _0xb3954d;
            $(this).hasClass("num-item-gear-one") && (_0xec0045 = parseInt($(this).attr("real-val")));
            var _0x5ce772 = {
              0: "P00000051723",
              1: "P00000051690",
              2: "P00000051691",
              3: "P00000051692",
              4: "P00000051693",
              5: "P00000051694",
              6: "P00000051805"
            };
            var _0x13ad6e = _0x5ce772[$(this).attr("buryingval")];
            publicClient.setGdpTrace({}, "clk", {
              WT_area_name: "0" == $(this).attr("buryingval") ? "1元充值档位" : "充话费",
              WT_area_type_1: "楼层",
              XY_env_type: "button",
              WT_envName: "0" == $(this).attr("buryingval") ? "1元充值档位按钮" : "位置" + $(this).attr("buryingval"),
              WT_event: _0x13ad6e
            });
            $(".num-item").removeClass("active gear-one-active");
            $(this).hasClass("num-item-gear-one") ? $(this).addClass("gear-one-active") : $(this).addClass("active");
            _0x26a397("", "", _0x2de7bb);
          } else {
            publicClient.showDialogPlug("充值金额必须在" + _0x4cf058 + "~" + _0x3975a2 + "之间", "知道了");
          }
        }
        _0x35e905 && _0x369a4a();
      }
    });
    $("#special-areaTop, #special-areaBottom, .num-list").on("fastClick", ".num-item-img", function () {
      var _0x1360a6 = "";
      var _0x432351 = "";
      _0x1360a6 = $(this).attr("positionno");
      _0x432351 = $(this).attr("positiontype");
      var _0xb3954d = {
        0: "P00000051696",
        1: "P00000051697",
        2: "P00000062035",
        3: "P00000062036",
        4: "P00000062037"
      };
      publicClient.setGdpTrace({}, "clk", {
        WT_area_name: $(this).attr("posval") < "2" ? "充话费" : "特惠专区",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: ($(this).find(".num-act-tit").html() || $(this).html() || "").trim(),
        WT_event: _0xb3954d[$(this).attr("posval")],
        WT_next_url: _0x1360a6
      });
      "0" != _0x1360a6 && ("1" != _0x432351 ? _0x4b93d3(_0x1360a6) : _0x5bf168(_0x1360a6));
    });
    $(".num-list").on("focus", ".money-input", function () {
      var _0x1360a6 = $(this).val().length;
      var _0x432351 = this;
      _0xb3954d() && ($(".btn-box").css("position", "static"), $(".footer-box").addClass("hidden"));
      setTimeout(function () {
        _0x432351.setSelectionRange(_0x1360a6, _0x1360a6);
      }, 0);
      _0x2ba863(true);
    });
    $(".num-list").on("input", ".money-input", function () {
      if (/^\d+(\.\d{0,2})?$/.test($(this).val())) {
        var _0x1360a6 = $(this).val();
        _0x1360a6.indexOf(".") < 0 && "" != _0x1360a6 && (_0x1360a6 = parseFloat(_0x1360a6));
        $(this).val(_0x1360a6);
      } else {
        var _0x1360a6 = $(this).val().replace(/[^\d.]/g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^\./g, "").replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
        _0x1360a6.indexOf(".") < 0 && "" != _0x1360a6 && (_0x1360a6 = parseFloat(_0x1360a6));
        $(this).val(_0x1360a6);
      }
      _0xec0045 = $(this).val();
      _0x26a397();
    });
    $(".num-list").on("blur", ".money-input", function () {
      if (_0x2ba863(false), _0xb3954d() && ($(".btn-box").css("position", "sticky"), $(".footer-box").removeClass("hidden")), publicClient.setGdpTrace({}, "clk", {
        WT_area_name: "充话费",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: "自定义",
        WT_event: "P00000051695"
      }), _0x219e0f && $(".addtionSms").hasClass("hidden") && (_0x2c5ef3 = 0, _0x38715f = _0xe5922b.addtionRights[_0x2c5ef3], _0x38715f.additionOperateId = _0xe5922b.addtionBlindRules[_0x2c5ef3].operateId, _0x38715f.price = _0xe5922b.addtionBlindRules[_0x2c5ef3].price, !_0x5b2915(_0x2c5ef3, parseInt($(this).val())))) {
        return void publicClient.showDialogPlug("请选择与搭售活动符合的档位", "我知道了");
      }
      $(".num-item").eq(_0x14fb03).hasClass("active") && (_0xec0045 = $(this).val(), $(this).addClass("hidden"), _0xec0045 <= 0 ? (_0xec0045 = 0, $(".num-item").eq(_0x14fb03).children(".money").html("自定义" + _0x31c8fb).removeClass("hidden")) : ($(".num-item").eq(_0x14fb03).children(".money").html(_0xec0045 + "元" + _0x31c8fb).removeClass("hidden"), (_0xec0045 < _0x4cf058 || _0xec0045 > _0x3975a2) && publicClient.showDialogPlug("充值金额必须在" + _0x4cf058 + "~" + _0x3975a2 + "之间", "知道了"), _0x26a397()));
    });
    $(".invoice-lists").on("fastClick", ".invoice-item", function () {
      $(this).hasClass("invoice-itemActive") || ($(this).siblings().removeClass("invoice-itemActive"), $(this).addClass("invoice-itemActive"));
    });
    $(".invoice-popup").on("fastClick", ".invoice-exit,.invoice-cancel", function () {
      $(".invoice-popup").addClass("hidden");
      _0x573a02();
    });
    $(".invoice-popup").on("fastClick", ".invoice-comfirm", function () {
      $(".invoice-popup").addClass("hidden");
      _0x5e83b8 = $(".invoice-itemActive").attr("type");
      _0x219f31();
    });
    $(".discounted-main").fastClick(function () {
      $(".discounted-main").addClass("hidden");
    });
    $(".discounted-main").on("fastClick", ".discounted-item", function () {
      var _0x1360a6 = $(this).attr("data-targetNoType");
      if (Number($(this).attr("data-usable"))) {
        return false;
      }
      "1" == _0x1360a6 ? _0x2b1164 ? _0x2b1164 == _0x2225e4 ? (_0x5ebec7 = $(this).index(), _0x26a397()) : publicClient.showDialogPlug("该活动仅限登录用户自己充值", "知道了") : _0x2d1915 ? publicClient.singleButBack("该活动仅限移动号码登录充值", "我知道了", function () {}) : publicClient.confirmPlug("登录", "取消", "该活动仅限登录后的用户充值，是否登录？", function () {
        cmcc.showLogin();
      }, "") : "2" == _0x1360a6 || "3" == _0x1360a6 ? _0x2b1164 ? (_0x5ebec7 = $(this).index(), _0x26a397()) : _0x2d1915 ? publicClient.singleButBack("该活动仅限移动号码登录充值", "我知道了", function () {}) : publicClient.confirmPlug("登录", "取消", "该活动仅限登录后充值，是否登录？", function () {
        cmcc.showLogin();
      }, "") : (_0x5ebec7 = $(this).index(), _0x26a397());
    });
    $(".couponClick").fastClick(function () {
      if (!$(".benefit-item >.coupon").hasClass("item-disable") && (_0x5c0b1a && _0x5c0b1a.length > 0 || _0x4441f9 && _0x4441f9.length > 0)) {
        if (0 == _0x389e04(true)) {
          return;
        }
        console.log(_0x38a94c.discountRules, _0x38a94c.discountCoupons);
        publicClient.setGdpTrace({}, "imp", {
          WT_area_type_1: "弹窗",
          WT_area_name: "充值优惠弹窗",
          WT_envName: "弹出"
        });
        _0x38a94c.discountRules.concat(_0x38a94c.discountCoupons).forEach(function (_0x1360a6) {
          publicClient.setGdpTrace({}, "imp", {
            WT_area_type_1: "楼层",
            WT_area_name: "充值优惠",
            XY_env_type: "button",
            WT_event: "P00000051699",
            WT_envName: _0x1360a6.saleName
          });
        });
        _0x5a64ee.includes(_0x56d11a) ? ($(".coupon-main-yn").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow"), $(".coupon-box").removeClass("reminder-to-bottom").addClass("reminder-to-top"), $(".coupon-main-yn").removeClass("hidden")) : ($(".coupon-main").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow"), $(".coupon-box").removeClass("reminder-to-bottom").addClass("reminder-to-top"), $(".coupon-main").removeClass("hidden"), $(".coupon-main-yn").addClass("hidden"));
      }
    });
    $(".coupon-main-yn").off("fastClick");
    $(".box_yn").on("fastClick", ".button_yn", function () {
      _0x212c5e();
    });
    $(".title-yn").on("fastClick", ".coupon-exit-yn", function () {
      _0x212c5e();
    });
    $(".coupon-main,.interests-exit,.coupon-exit,.interests-main").fastClick(function (_0x1360a6) {
      publicClient.setGdpTrace({}, "clk", {
        WT_et: "clk",
        WT_area_type_1: "弹窗",
        WT_area_name: "充值优惠弹窗",
        WT_envName: "关闭"
      });
      _0x8c9bd2();
    });
    $(".otherCharge").on("input", ".other-charge-input", function () {
      var _0x1360a6 = this;
      var _0x432351 = $(this).val();
      var _0xb3954d = _0x611ed8($(this).val());
      if (_0xb3954d && !(_0xb3954d.length <= 0)) {
        $(this).val(_0xb3954d);
        $(this).selectionEnd;
        var _0x1360a6 = this;
        setTimeout(function () {
          _0x1360a6.setSelectionRange(_0xb3954d.length, _0xb3954d.length);
        }, 0);
        var _0x5ce772 = /^[0-9]+.?[0-9]*$/;
        _0x432351 = _0x432351.replace(/[^\d]/g, "");
        _0x5ce772.test(_0x432351) ? _0x432351 == _0x2225e4 && ($(".other-charge-input-tip").html("*两次号码输入需保持一致"), $(".other-charge-input-tip").removeClass("other-charge-input-tip-error")) : ($(".other-charge-input-tip").html("*两次号码输入不一致，请重新输入"), $(".other-charge-input-tip").addClass("other-charge-input-tip-error"));
      }
    });
    $(".otherCharge").on("fastClick", ".otherCharge-no-button", function (_0x1360a6) {
      _0x1360a6.preventDefault();
      $(".otherCharge").addClass("hidden");
      _0x573a02();
    });
    $(".otherCharge").on("fastClick", ".otherCharge-button", function (_0x1360a6) {
      if (_0x1360a6.preventDefault(), _0xec0045 >= 100 && "0" == _0x5e1d04) {
        if (($("#other-charge-input-again").val() || "").replace(/[^\d]/g, "") != _0x2225e4) {
          $(".other-charge-input-tip").html("*两次号码输入不一致，请重新输入");
          return void $(".other-charge-input-tip").addClass("other-charge-input-tip-error");
        }
      }
      var _0x432351 = null;
      $(".otherCharge-button").attr("pay_btn_type") == _0x3b1770 && (_0x432351 = _0x3b1770);
      _0x258add(_0x432351);
      $(".otherCharge").addClass("hidden");
    });
    $(".jfRecharge").on("fastClick", ".otherCharge-no-button", function (_0x1360a6) {
      _0x1360a6.preventDefault();
      $(".jfRecharge").addClass("hidden");
      _0x573a02();
    });
    $(".jfRecharge").on("fastClick", ".otherCharge-button", function (_0x1360a6) {
      _0x1360a6.preventDefault();
      $(".jfRecharge").addClass("hidden");
      var _0x432351 = null;
      $(".otherCharge-button").attr("pay_btn_type") == _0x3b1770 && (_0x432351 = _0x3b1770);
      _0x219e0f ? _0xb9ded1() : "-1" != _0x31d566 ? _0x34a6c0() : _0x20d200 ? _0x34a6c0() : _0x258add(_0x432351);
    });
    $(".jfRecharge").on("fastClick", ".blind-tip-show", function (_0x432351) {
      var _0xb3954d = "https://touch.10086.cn/i/reapp/v2.0/pages/recharge/";
      _0x1360a6.location.href.indexOf("/i/gray") > -1 && (_0xb3954d = "https://touch.10086.cn/i/gray/reapp/v2.0/pages/recharge/");
      _0x4b93d3(_0xb3954d + "recharge_rule_jf.html");
    });
    $(".coupon-exit-addtion").fastClick(function (_0x1360a6) {
      _0x8c9bd2();
      _0x573a02();
      publicClient.setGdpTrace({}, "clk", {
        WT_area_type_1: "弹窗",
        WT_envName: "关闭",
        WT_area_name: "加购热门权益_二次确认弹窗"
      });
    });
    $(".coupon-box, .reminder-alert,.box_yn,title-yn, .interests-box, .point-product-arrs>.mask-box-box").fastClick(function (_0x1360a6) {
      _0x1360a6.preventDefault();
      _0x1360a6.stopPropagation();
    });
    $(".coupon-list").on("fastClick", ".discount-item", function () {
      if (!$(this).hasClass("discount-itemNotClick")) {
        _0x18cd43 = "A";
        _0xf07e2f = $(this).attr("type");
        var _0x1360a6 = "";
        if ("rule" == _0xf07e2f) {
          var _0x432351 = $(this).attr("targetNoType");
          "1" == _0x432351 ? _0x2b1164 ? _0x2b1164 == _0x2225e4 ? (_0x4c8354 = $(this).index(), _0x5ebec7 = $(this).attr("index"), _0x324c2c($(this))) : (publicClient.showDialogPlug("该活动仅限登录用户自己充值", "知道了"), _0x5a64ee.includes(_0x56d11a) && _0x8c9bd2()) : (_0x2d1915 ? publicClient.singleButBack("该活动仅限移动号码登录充值", "我知道了", function () {}) : publicClient.confirmPlug("登录", "取消", "该活动仅限登录后的用户充值，是否登录？", function () {
            cmcc.showLogin();
          }, ""), _0x5a64ee.includes(_0x56d11a) && _0x8c9bd2()) : "2" == _0x432351 || "3" == _0x432351 ? _0x2b1164 ? (_0x4c8354 = $(this).index(), _0x5ebec7 = $(this).attr("index"), _0x324c2c($(this))) : (_0x2d1915 ? publicClient.singleButBack("该活动仅限移动号码登录充值", "我知道了", function () {}) : publicClient.confirmPlug("登录", "取消", "该活动仅限登录后充值，是否登录？", function () {
            cmcc.showLogin();
          }, ""), _0x5a64ee.includes(_0x56d11a) && _0x8c9bd2()) : (_0x4c8354 = $(this).index(), _0x5ebec7 = $(this).attr("index"), _0x324c2c($(this)));
          _0x1360a6 = _0x4441f9[_0x5ebec7] && _0x4441f9[_0x5ebec7].saleName;
        } else {
          _0x4c8354 = $(this).index();
          _0x5ebec7 = $(this).attr("index");
          _0x1360a6 = _0x5c0b1a[_0x5ebec7] && _0x5c0b1a[_0x5ebec7].saleName;
          _0x324c2c($(this));
        }
        _0x5a64ee.includes(_0x56d11a) || _0x8c9bd2();
        publicClient.setGdpTrace({}, "clk", {
          WT_area_name: "充值优惠",
          WT_area_type_1: "楼层",
          XY_env_type: "button",
          WT_envName: _0x1360a6,
          WT_event: "P00000051699"
        });
      }
    });
    $(".point-box").off("fastClick").on("fastClick", function (_0x1360a6) {
      _0x1360a6.preventDefault();
      _0x1360a6.stopPropagation();
      $(".point-product-arrs").removeClass("hidden coupon-mainNone");
      $(".mask-box-box").removeClass("reminder-to-bottom").addClass("reminder-to-top");
    });
    $(".point-box").off("fastClick", ".point-box-detail").on("fastClick", ".point-box-detail", function (_0x1360a6) {
      _0x1360a6.stopPropagation();
      var _0x432351 = false;
      if ($($(this)).hasClass("active")) {
        $($(this)).removeClass("active");
        _0x2de7bb = false;
        _0x247bbf = -1;
        0 == _0x41a07a.length && (_0x1a53d0 = true);
        "A" == _0x18cd43 && (_0x18cd43 = "-1");
        $("#can_use_point_num").attr("jf_inx", "-1");
      } else {
        $($(this)).addClass("active");
        _0x2de7bb = true;
        _0x247bbf = parseInt($("#can_use_point_num").attr("jf_inx"));
        -1 == _0x247bbf && (_0x247bbf = _0x546c96.canUsePoint[_0x546c96.canUsePoint.length - 1].index, $("#can_use_point_num").attr("jf_inx", _0x247bbf));
        var _0xb3954d = "";
        _0x546c96.canUsePoint.map(function (_0x1360a6) {
          _0x1360a6.index == parseInt(_0x247bbf) && (_0xb3954d = _0x1360a6.saleName);
        });
        var _0x5ce772 = {
          WT_et: "clk",
          WT_area_type_1: "楼层",
          WT_area_type_2: "",
          WT_area_name: "积分运营位",
          XY_env_type: "button",
          WT_event: "P00000116838",
          WT_envName: _0xb3954d,
          XY_gd_source: "",
          WT_markId: ""
        };
        publicClient.setGdpTrace({}, "clk", _0x5ce772);
        _0x432351 = _0x1ad579();
      }
      _0x26a397("", _0x432351);
    });
    $(".num-list").on("fastClick", ".num-more", function () {
      $(".individualizeMore").removeClass("hidden");
      $(this).remove();
      publicClient.setGdpTrace({}, "clk", {
        WT_area_name: "充话费",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: "更多金额"
      });
    });
    $(".point-box").off("fastClick", ".point-box-close").on("fastClick", ".point-box-close", function (_0x1360a6) {
      _0x1360a6.stopPropagation();
      _0x1360a6.preventDefault();
      $(".point-product-arrs").removeClass("hidden coupon-mainNone");
      $(".mask-box-box").removeClass("reminder-to-bottom").addClass("reminder-to-top");
    });
    $(".point-product-container").off("fastClick", ".point-product-item").on("fastClick", ".point-product-item", function () {
      var _0x1360a6 = parseInt($(this).attr("jfposition"));
      if (!$(this).hasClass("active")) {
        var _0x432351 = false;
        $(".point-product-item").removeClass("active");
        $(this).addClass("active");
        _0x247bbf = _0x1360a6;
        var _0xb3954d = 0;
        var _0x5ce772 = 0;
        _0x546c96.canUsePoint.map(function (_0x1360a6) {
          _0x1360a6.index == parseInt(_0x247bbf) && (_0xb3954d = _0x1360a6.offsetPoint, _0x5ce772 = _0x1360a6.offsetFee);
        });
        var _0x13ad6e = {
          WT_et: "clk",
          WT_area_type_1: "弹窗",
          WT_area_type_2: "",
          WT_area_name: "积分切换",
          XY_env_type: "button",
          WT_event: "",
          WT_envName: "",
          XY_gd_source: "",
          WT_markId: ""
        };
        _0x247bbf > -1 ? (_0x2de7bb = true, _0x13ad6e.WT_envName = _0x5ce772 + "元", $(".point-box-detail").addClass("active")) : (_0x2de7bb = false, _0x13ad6e.WT_envName = "不使用积分抵扣", $(".point-box-detail").removeClass("active"), 0 == _0x41a07a.length && (_0x1a53d0 = true), "A" == _0x18cd43 && (_0x18cd43 = "-1"));
        publicClient.setGdpTrace({}, "clk", _0x13ad6e);
        _0x2de7bb || (_0xb3954d = _0x546c96.canUsePoint[_0x546c96.canUsePoint.length - 1].offsetPoint, _0x5ce772 = _0x546c96.canUsePoint[_0x546c96.canUsePoint.length - 1].offsetFee);
        _0x432351 = _0x1ad579();
        $("#can_use_point_num").html(_0xb3954d);
        $("#can_use_point_fee").html(_0x5ce772 + "元");
        $("#can_use_point_num").attr("jf_inx", _0x247bbf);
        _0x26a397("", _0x432351);
      }
      _0x8c9bd2();
    });
    $(".point-product-arrs").off("fastClick").on("fastClick", function () {
      _0x8c9bd2();
    });
    $(".addtion-box").off("fastClick");
    $(".addtion-box").on("fastClick", ".addtionCheck", function () {
      if ($(".unit-order-product").removeClass("unit-order-product-active"), _0x31d566 = "-1", _0x20d200 = false, publicClient.setGdpTrace({}, "clk", {
        WT_area_name: "加购热门权益",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: "勾选加购权益",
        WT_event: "P00000051701"
      }), $(".addtionCheck").hasClass("active")) {
        $(".addtionCheck").removeClass("active");
        _0x219e0f = false;
        _0x26a397(false);
      } else {
        if (_0x2b1164 != _0x2225e4) {
          return void publicClient.showDialogPlug("搭售活动仅限本机充值", "我知道了");
        }
        null == _0x27ccc2 ? _0xe5922b.addtionBoxRules.length > 0 ? (_0x2c5ef3 = 0, _0x38715f = _0xe5922b.addtionRights[_0x2c5ef3], _0x38715f.additionOperateId = _0xe5922b.addtionBlindRules[_0x2c5ef3].operateId, _0x38715f.price = _0xe5922b.addtionBlindRules[_0x2c5ef3].price, _0x219e0f = true, _0x26a397(false)) : publicClient.showDialogPlug("请选择与搭售活动符合的档位", "我知道了") : (_0x219e0f = false, publicClient.showDialogPlug("搭售活动与权益活动不可同时参与！", "我知道了"));
      }
    });
    $(".addtion-box").on("fastClick", ".img-item3", function () {
      var _0x1360a6 = {
        0: "P00000051705",
        1: "P00000051706",
        2: "P00000051707",
        3: "P00000051708",
        4: "P00000051709",
        5: "P00000051710"
      };
      0 == _0x219e0f ? publicClient.showDialogPlug("请先勾选加购热门权益选择框", "我知道了") : ($(this).siblings().removeClass("current"), _0x2c5ef3 = $(this).attr("index"), _0x38715f = _0xe5922b.addtionRights[_0x2c5ef3], _0x38715f.additionOperateId = _0xe5922b.addtionBlindRules[_0x2c5ef3].operateId, _0x38715f.price = _0xe5922b.addtionBlindRules[_0x2c5ef3].price, $(this).addClass("current"), $(".unit-order-product").removeClass("unit-order-product-active"), _0x31d566 = "-1", publicClient.setGdpTrace({}, "clk", {
        WT_area_name: "加购热门权益",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: _0x38715f.goodsName,
        WT_event: _0x1360a6[$(this).attr("index")],
        WT_adverType: "122"
      }), $("#payMoney").html(publicClient.floating(Number(_0x5bd53a) + Number(_0x38715f.price))));
    });
    $(".addtion-box").on("fastClick", ".addtionRule-buy", function () {
      publicClient.setGdpTrace({}, "clk", {
        WT_area_name: "加购热门权益",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: "规则",
        WT_event: "P00000051702"
      });
      publicClient.setGdpTrace({}, "imp", {
        WT_area_type_1: "弹窗",
        WT_area_name: "加购热门权益_规则弹窗",
        WT_envName: "弹出"
      });
      $(".addtionRule").removeClass("hidden");
    });
    $(".addtionRule").on("fastClick", ".blindBoxRecord-close", function () {
      publicClient.setGdpTrace({}, "clk", {
        WT_area_type_1: "弹窗",
        WT_area_name: "加购热门权益_规则弹窗",
        WT_envName: "关闭"
      });
      $(".addtionRule").addClass("hidden");
    });
    $(".addtion-box").on("fastClick", ".addtion-record", function () {
      publicClient.setGdpTrace({}, "clk", {
        WT_area_name: "加购热门权益",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: "购买记录",
        WT_event: "P00000051703",
        WT_adverType: "122"
      });
      _0x19c473();
      $(".addtionRecord").removeClass("hidden");
    });
    $(".addtionRecord").on("fastClick", ".blindBoxRecord-button", function () {
      publicClient.setGdpTrace({}, "clk", {
        WT_area_name: "加购热门权益",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: "购买记录_我知道了",
        WT_event: "P00000051704",
        WT_adverType: "122"
      });
      $(".addtionRecord").addClass("hidden");
      $(".blind-box-records").empty();
    });
    $(".preferential-pack-box").off("fastClick");
    $(".preferential-pack-box").on("fastClick", ".preferential-pack-down", function () {
      var _0x1360a6 = _0x269b4b && _0x269b4b[0] && _0x269b4b[0].presentCode && _0x269b4b[0].presentCode.split("|");
      var _0x432351 = (_0x269b4b && _0x269b4b[0] && _0x269b4b[0].presentCode || "").split("|")[0] || "";
      publicClient.setGdpTrace({}, "clk", {
        WT_envName: "卡片",
        WT_event: "P00000097482",
        WT_si_n: _0x269b4b && _0x269b4b[0] && _0x269b4b[0].saleName || "",
        WT_si_x: "1",
        WT_goods_id: _0x432351,
        XY_sqb_group: _0x1360a6[1] || "",
        WT_next_url: _0x269b4b[0] && _0x269b4b[0].sqbUrl
      });
      _0x269b4b[0] && _0x269b4b[0].sqbUrl && _0x4b93d3(_0x269b4b[0].sqbUrl);
    });
    $(".preferential-pack-box").on("fastClick", ".preferential-pack-check", function () {
      var _0x1360a6 = (_0x269b4b && _0x269b4b[0] && _0x269b4b[0].presentCode || "").split("|")[1] || "";
      var _0x432351 = (_0x269b4b && _0x269b4b[0] && _0x269b4b[0].presentCode || "").split("|")[0] || "";
      if ($(this).hasClass("active")) {
        if (_0x4bf490 += 1, publicClient.setGdpTrace({}, "clk", {
          WT_envName: "取消勾选",
          WT_event: "P00000097481",
          WT_si_n: _0x269b4b && _0x269b4b[0] && _0x269b4b[0].saleName || "",
          WT_si_x: "1",
          WT_goods_id: _0x432351,
          XY_sqb_group: _0x1360a6
        }), 1 == _0x4bf490 && (_0x269b4b[0] || {}).sqbImage) {
          var _0xb3954d = "https://touch.10086.cn/" + _0x26a064 + "/operation/" + (_0x269b4b[0] || {}).sqbImage + ".png";
          publicClient.showDialogWanliu(function () {
            $(".preferential-pack-check").removeClass("active");
            _0x20d200 = false;
            _0x26a397(false);
          }, _0xb3954d, _0x269b4b[0] || {});
        } else {
          _0x20d200 = false;
          _0x26a397(false);
        }
      } else {
        if (!$(this).hasClass("item-disable")) {
          publicClient.setGdpTrace({}, "clk", {
            WT_envName: "勾选",
            WT_event: "P00000097480",
            WT_si_n: _0x269b4b && _0x269b4b[0] && _0x269b4b[0].saleName || "",
            WT_si_x: "1",
            WT_goods_id: _0x432351,
            XY_sqb_group: _0x1360a6
          });
          var _0x5ce772 = function (_0x1360a6) {
            parseFloat(_0x1360a6) >= 5 ? (_0x31d566 = "-1", _0x219e0f = false, _0x3ef60e = false, _0x20d200 = true, _0x1a2a73(_0x269b4b[0].operateId, function (_0x1360a6, _0x432351) {
              _0x1360a6 && publicClient.showDialogPro(_0x51ca5d(_0x1360a6) || "", "我已阅读并同意", _0x432351, _0x269b4b[0]);
            }), _0x26a397(false)) : (publicClient.toastPlug("省钱包资费5元，请充值后再试", 2000), $(".preferential-pack-check").removeClass("active"), $(".preferential-pack-check").addClass("item-disable"));
          };
          var _0x13ad6e = parseFloat($("#balanceMoney").html()) || 0;
          "--" != $("#balanceMoney").html() ? _0x5ce772(_0x13ad6e) : _0x152d09(function (_0x1360a6) {
            _0x5ce772(_0x1360a6);
          });
        }
      }
    });
    $(".addtion-box").on("fastClick", ".go-to-repay-addtion,.do-cancel-addtion", function () {
      if (_0x2b1164) {
        cmcc.newWebview({
          debug: false,
          markID: "",
          type: "",
          funCode: "",
          bizCode: "",
          url: "https://h.app.coc.10086.cn/cmcc-app/app-pages/orderList.html",
          success: function (_0x1360a6) {},
          error: function (_0x1360a6) {}
        });
      } else {
        cmcc.showLogin();
      }
    });
    $(".mask-box").off("fastClick");
    $(".mask-box").on("fastClick", ".option", function () {
      if ($(".option").hasClass("active")) {
        $(".option").removeClass("active");
        _0x3ef60e = false;
        _0x26a397(false);
      } else {
        var _0x1360a6 = {};
        _0x56f2a8 && _0x56f2a8.length > 0 && (_0x1360a6 = _0x156486());
        _0x1360a6.maskRuleUse.length > 0 ? null == _0x27ccc2 ? (_0x3ef60e = true, $(".unit-order-product").removeClass("unit-order-product-active"), _0x31d566 = "-1", _0x26a397(false)) : (_0x3ef60e = false, publicClient.showDialogPlug("盲盒活动与权益活动不可同时参与！", "我知道了")) : (_0x3ef60e = false, publicClient.showDialogPlug("您选择得档位不支持活动加购，请选择30、50、100元！", "我知道了"));
      }
    });
    $(".mask-box").on("fastClick", ".rule-buy", function () {
      $(".blindRule").removeClass("hidden");
    });
    $(".blindRule").on("fastClick", ".blindBoxRecord-close", function () {
      $(".blindRule").addClass("hidden");
    });
    $(".mask-box").on("fastClick", ".record-buy", function () {
      _0x54c559();
      $(".blindRecord").removeClass("hidden");
    });
    $(".blindRecord").on("fastClick", ".blindBoxRecord-button", function () {
      $(".blindRecord").addClass("hidden");
      $(".blind-box-records").empty();
    });
    $(".mask-box").on("fastClick", ".do-cancel", function () {
      $(this).parent().parent().addClass("hidden");
    });
    $(".mask-box").on("fastClick", ".go-to-repay", function () {
      if (_0x2b1164) {
        cmcc.newWebview({
          debug: false,
          markID: "",
          type: "",
          funCode: "",
          bizCode: "",
          url: "https://h.app.coc.10086.cn/cmcc-app/app-pages/orderList.html",
          success: function (_0x1360a6) {},
          error: function (_0x1360a6) {}
        });
      } else {
        cmcc.showLogin();
      }
    });
    $(".maskSms-codeBtn").off("click");
    $(".maskSms-codeBtn").click(function () {
      if (!$(".maskSms-codeBtn").hasClass("disable")) {
        if (("-1" != _0x31d566 || _0x20d200) && !$(".product-info-read-con").hasClass("active")) {
          return void publicClient.toastMsgPlug("请先同意勾选协议", 2000);
        }
        $(".rechargeSms-message").text("");
        $(".maskSms-codeBtn").addClass("disable");
        _0x24b842();
        var _0x1360a6 = _0x38715f && _0x38715f.goodsName || (_0x110885[_0x31d566] || {}).saleName;
        var _0x432351 = {
          WT_area_name: "加购权益二次确认弹窗",
          WT_area_type_1: "楼层",
          XY_env_type: "button",
          WT_area_type_2: "服务类",
          WT_envName: "获取验证码",
          WT_event: "P00000058054",
          WT_si_n: "充值" + _0xec0045 + "元" + (_0x1360a6 ? "_" + _0x1360a6 : ""),
          WT_si_x: "6",
          WT_goods_id: _0x38715f && _0x38715f.skuid,
          WT_sku_id: _0x38715f && _0x38715f.skuid
        };
        if ("-1" != _0x31d566) {
          var _0xb3954d = ((_0x110885[_0x31d566] || {}).presentCode || "").split("|");
          _0x432351 = {
            WT_area_name: "充值同定产品二次确认弹窗",
            WT_area_type_1: "楼层",
            XY_env_type: "button",
            WT_area_type_2: "服务类",
            WT_envName: "获取验证码",
            WT_event: "P00000059891",
            WT_si_n: "充值" + _0xec0045 + "元" + (_0x1360a6 ? "_" + _0x1360a6 : ""),
            WT_goods_id: _0xb3954d && _0xb3954d[0] || "",
            WT_si_x: "6"
          };
        }
        if (_0x20d200) {
          var _0x5ce772 = _0x269b4b && _0x269b4b[0] && _0x269b4b[0].presentCode && _0x269b4b[0].presentCode.split("|");
          _0x432351 = {
            WT_envName: "获取验证码",
            WT_event: "P00000097487",
            XY_sqb_group: _0x5ce772[1] || "",
            WT_si_n: "充值" + _0xec0045 + "元_" + (_0x269b4b && _0x269b4b[0] && _0x269b4b[0].saleName || ""),
            WT_goods_id: _0x5ce772[0] || "",
            WT_si_x: "6"
          };
        }
        publicClient.setGdpTrace({}, "clk", _0x432351);
      }
    });
    $(".product-info-container").on("fastClick", ".product-info-read-check", function () {
      if ($(this).attr("does-click")) {
        if ($(".product-info-read-con").hasClass("active") ? $(".product-info-read-con").removeClass("active") : $(".product-info-read-con").addClass("active"), _0x20d200) {
          var _0x1360a6 = _0x269b4b && _0x269b4b[0] && _0x269b4b[0].presentCode && _0x269b4b[0].presentCode.split("|");
          publicClient.setGdpTrace({}, "clk", {
            WT_envName: "勾选协议",
            WT_event: "P00000097486",
            XY_sqb_group: _0x1360a6[1] || "",
            WT_si_n: "充值" + _0xec0045 + "元_" + (_0x269b4b && _0x269b4b[0] && _0x269b4b[0].saleName || ""),
            WT_goods_id: _0x1360a6[0] || "",
            WT_si_x: "7"
          });
        } else {
          var _0x432351 = _0x38715f && _0x38715f.goodsName || (_0x110885[_0x31d566] || {}).saleName;
          var _0xb3954d = ((_0x110885[_0x31d566] || {}).presentCode || "").split("|");
          publicClient.setGdpTrace({}, "clk", {
            WT_envName: "充值同定产品二次确认弹窗_勾选协议",
            WT_event: "P00000059894",
            WT_adverType: "122",
            WT_si_n: "充值" + _0xec0045 + "元" + (_0x432351 ? "_" + _0x432351 : ""),
            WT_goods_id: _0xb3954d && _0xb3954d[0] || "",
            WT_si_x: "7"
          });
        }
      }
    });
    $(".product-info-container").on("fastClick", ".product-info-use-desc-protocal", function () {
      $(this).attr("openUrl") && _0x4b93d3($(this).attr("openUrl"));
    });
    $(".maskSms-code").on("blur", function () {
      var _0x432351 = document.documentElement.scrollTop || document.body.scrollTop;
      _0x1360a6.scrollTo(0, parseFloat(_0x432351) + 1);
    });
    $(".maskSms-code").on("focus", function () {
      $(".rechargeSms-message").text("");
    });
    $(".maskSms-code").on("input", function () {
      4 == $(this).val().length ? $(".init-button").removeClass("disable") : $(".init-button").addClass("disable");
      var _0x1360a6 = _0x38715f && _0x38715f.goodsName || (_0x110885[_0x31d566] || {}).saleName;
      var _0x432351 = {
        WT_area_name: "加购权益二次确认弹窗",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_area_type_2: "服务类",
        WT_envName: "输入验证码",
        WT_event: "P00000058056",
        WT_adverType: "122",
        WT_si_n: "充值" + _0xec0045 + "元" + (_0x1360a6 ? "_" + _0x1360a6 : ""),
        WT_si_x: "3",
        WT_goods_id: _0x38715f && _0x38715f.skuid,
        WT_sku_id: _0x38715f && _0x38715f.skuid
      };
      if ("-1" != _0x31d566) {
        var _0xb3954d = ((_0x110885[_0x31d566] || {}).presentCode || "").split("|");
        _0x432351 = {
          WT_area_name: "充值同定产品二次确认弹窗",
          WT_area_type_1: "楼层",
          XY_env_type: "button",
          WT_area_type_2: "服务类",
          WT_envName: "输入验证码",
          WT_event: "P00000059893",
          WT_adverType: "122",
          WT_si_n: "充值" + _0xec0045 + "元" + (_0x1360a6 ? "_" + _0x1360a6 : ""),
          WT_goods_id: _0xb3954d && _0xb3954d[0] || "",
          WT_si_x: "3"
        };
      }
      if (_0x20d200) {
        var _0x5ce772 = _0x269b4b && _0x269b4b[0] && _0x269b4b[0].presentCode && _0x269b4b[0].presentCode.split("|");
        _0x432351 = {
          WT_envName: "输入验证码",
          WT_event: "P00000097488",
          XY_sqb_group: _0x5ce772[1] || "",
          WT_si_n: "充值" + _0xec0045 + "元_" + (_0x269b4b && _0x269b4b[0] && _0x269b4b[0].saleName || ""),
          WT_goods_id: _0x5ce772[0] || "",
          WT_si_x: "3"
        };
      }
      4 == $(this).val().length && publicClient.setGdpTrace({}, "clk", _0x432351);
    });
    $(".init-button").off("click");
    $(".init-button").click(function () {
      if (!$(this).hasClass("disable")) {
        if (_0x5ee3f5 = $(this).prev().children(".maskSms-code").val(), 4 != _0x5ee3f5.length) {
          return void (_0x20d200 && !$(".product-info-read-con").hasClass("active") ? publicClient.toastMsgPlug("请先同意勾选协议", 2000) : publicClient.toastMsgPlug("验证码不正确，请核对后重新输入。", 2000));
        }
        if ("-1" != _0x31d566 && !$(".product-info-read-con").hasClass("active")) {
          return void publicClient.toastMsgPlug("请先同意勾选协议", 2000);
        }
        $(this).addClass("disable");
        publicClient.showLoadPlug();
        var _0x1360a6 = "";
        $(this).attr("pay_btn_type_ds") == _0x3b1770 && (_0x1360a6 = _0x3b1770);
        _0x258add(_0x1360a6);
        var _0x432351 = _0x38715f && _0x38715f.goodsName || (_0x110885[_0x31d566] || {}).saleName;
        var _0xb3954d = {
          WT_area_name: "加购权益二次确认弹窗",
          WT_area_type_1: "楼层",
          XY_env_type: "button",
          WT_area_type_2: "服务类",
          WT_envName: "确认订购",
          WT_event: "P00000051726",
          WT_si_n: "充值" + _0xec0045 + "元" + (_0x432351 ? "_" + _0x432351 : ""),
          WT_si_x: "21",
          WT_goods_id: _0x38715f && _0x38715f.skuid,
          WT_sku_id: _0x38715f && _0x38715f.skuid
        };
        if ("-1" != _0x31d566) {
          var _0x5ce772 = ((_0x110885[_0x31d566] || {}).presentCode || "").split("|");
          _0xb3954d = {
            WT_area_name: "充值同定产品二次确认弹窗",
            WT_area_type_1: "楼层",
            XY_env_type: "button",
            WT_area_type_2: "服务类",
            WT_envName: "确认订购",
            WT_event: "P00000059892",
            WT_adverType: "122",
            WT_si_n: "充值" + _0xec0045 + "元" + (_0x432351 ? "_" + _0x432351 : ""),
            WT_goods_id: _0x5ce772 && _0x5ce772[0] || "",
            WT_si_x: "21"
          };
        }
        if (_0x20d200) {
          publicClient.setGdpTrace({}, "popview", {
            WT_envName: "充值页面_省钱包业务订购弹窗_弹窗关闭",
            WT_event: "H5PopHide",
            XY_sqb_group: ((_0x269b4b[0] || {}).presentCode || "").split("|")[1] || ""
          });
          var _0x13ad6e = _0x269b4b && _0x269b4b[0] && _0x269b4b[0].presentCode && _0x269b4b[0].presentCode.split("|");
          _0xb3954d = {
            WT_envName: "确认订购",
            WT_event: "P00000094675",
            XY_sqb_group: _0x13ad6e[1] || "",
            WT_si_n: "充值" + _0xec0045 + "元_" + (_0x269b4b && _0x269b4b[0] && _0x269b4b[0].saleName || ""),
            WT_goods_id: _0x13ad6e[0] || "",
            WT_si_x: "21"
          };
        }
        publicClient.setGdpTrace({}, "clk", _0xb3954d);
      }
    });
    $(".interests-list").on("fastClick", ".interests-item", function () {
      _0x3ef60e ? (_0x8c9bd2(), publicClient.showDialogPlug("盲盒活动与权益活动不可同时参与！", "我知道了")) : _0x219e0f ? (_0x8c9bd2(), publicClient.showDialogPlug("搭售活动与权益活动不可同时参与！", "我知道了")) : $(this).hasClass("interests-itemNotClick") || (_0x27ccc2 = $(this).attr("index"), _0x3c031b = $(this).index(), $(".interests-coupon").addClass("active"), $(".quanyi").addClass("hidden"), _0x26a397(), _0x8c9bd2());
    });
    $(".reload-text, .interests-reload-text").fastClick(function (_0x1360a6) {
      _0x1360a6.stopPropagation();
      _0x1360a6.preventDefault();
      $(this).removeClass("blue").html("加载中");
      $(this).hasClass("reload-text") ? $(".reload-icon").addClass("loadRotate") : $(".interests-reload-icon").addClass("loadRotate");
      _0x1546ea = true;
      _0x10f733();
    });
    $(".recharge-btn").off("fastClick");
    $(".recharge-btn").fastClick(function () {
      if (!$(this).hasClass("disable") && _0x2225e4) {
        var _0x1360a6 = _0x38715f && _0x38715f.goodsName || "-";
        var _0x432351 = (_0x110885[_0x31d566] || {}).saleName || "-";
        var _0xb3954d = {
          WT_area_name: "立即支付",
          WT_area_type_1: "楼层",
          XY_env_type: "button",
          WT_charge_phone: _0x2225e4 || "",
          WT_envName: "立即支付",
          WT_event: "P00000051724",
          WT_adverType: "122",
          XY_czyh: _0x26576b || _0x1cbdea,
          WT_si_n: "充值" + _0xec0045 + "元_" + _0x1360a6 + "_" + _0x432351,
          WT_si_x: "20",
          WT_goods_id: "cz" + _0xec0045
        };
        if (_0x432351 && "-" != _0x432351 && (_0xb3954d.XY_cztd = _0x432351), publicClient.setGdpTrace({}, "clk", _0xb3954d), $(".otherCharge-button").attr("pay_btn_type", ""), $(".init-button").attr("pay_btn_type_ds", ""), "" != _0x2b1164 && _0x2b1164 != _0x2225e4 && $(".otherCharge").hasClass("hidden")) {
          $(".otherCharge").removeClass("hidden");
          var _0x5ce772 = $("#otherRechargeShowTpl").html();
          var _0x13ad6e = juicer(_0x5ce772, {
            littleGear: true
          });
          _0xec0045 >= 100 && "0" == _0x5e1d04 && (_0x13ad6e = juicer(_0x5ce772, {
            littleGear: false
          }));
          $(".otherCharge-dialog").html(_0x13ad6e);
          $(".text_phone").text(_0x2225e4);
          $(".text_val").text(Number($("#amoMoney").text()) + "元");
          return void publicClient.closeLoadPlug();
        }
        _0x3654e7();
        Number($("#payMoney").html());
        _0x36f6ac && _0x2d1915 ? publicClient.singleButBack("该活动仅限移动号码登录充值", "我知道了", function () {}) : (_0x5e83b8 = "", _0x187878(function () {
          _0x219f31();
        }));
      }
    });
    $(".recharge-hebao-btn").off("fastClick");
    $(".recharge-hebao-btn").fastClick(function () {
      if (!$(this).hasClass("disable") && _0x2225e4) {
        var _0x1360a6 = _0x38715f && _0x38715f.goodsName || "-";
        var _0x432351 = (_0x110885[_0x31d566] || {}).saleName || "-";
        var _0xb3954d = {
          WT_area_type_1: "楼层",
          WT_area_name: "立享充值9.98折",
          XY_env_type: "button",
          WT_envName: "立享充值9.98折",
          WT_event: "P00000116837",
          WT_adverType: "122",
          XY_czyh: _0x26576b || _0x1cbdea,
          WT_si_n: "充值" + _0xec0045 + "元_" + _0x1360a6 + "_" + _0x432351,
          WT_si_x: "20",
          WT_goods_id: "cz" + _0xec0045
        };
        if (_0x432351 && "-" != _0x432351 && (_0xb3954d.XY_cztd = _0x432351), publicClient.setGdpTrace({}, "clk", _0xb3954d), $(".otherCharge-button").attr("pay_btn_type", _0x3b1770), $(".init-button").attr("pay_btn_type_ds", _0x3b1770), "" != _0x2b1164 && _0x2b1164 != _0x2225e4 && $(".otherCharge").hasClass("hidden")) {
          $(".otherCharge").removeClass("hidden");
          var _0x5ce772 = $("#otherRechargeShowTpl").html();
          var _0x13ad6e = juicer(_0x5ce772, {
            littleGear: true
          });
          _0xec0045 >= 100 && "0" == _0x5e1d04 && (_0x13ad6e = juicer(_0x5ce772, {
            littleGear: false
          }));
          $(".otherCharge-dialog").html(_0x13ad6e);
          $(".text_phone").text(_0x2225e4);
          $(".text_val").text(Number($("#amoMoney").text()) + "元");
          return void publicClient.closeLoadPlug();
        }
        _0x3654e7();
        _0x36f6ac && _0x2d1915 ? publicClient.singleButBack("该活动仅限移动号码登录充值", "我知道了", function () {}) : (_0x5e83b8 = "", _0x187878(function () {
          _0x219f31(_0x3b1770);
        }));
      }
    });
    $(".prompt").fastClick(function () {
      $(".reminder-prompt").removeClass("hidden reminder-promptNone").addClass("reminder-promptShow");
      $(".reminder-alert").removeClass("reminder-to-bottom").addClass("reminder-to-top");
      publicClient.setGdpTrace({}, "clk", {
        WT_area_name: "话费页底部",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: "温馨提示",
        WT_event: "P00000051717"
      });
    });
    $(".reminder-prompt,.reminder-exit").fastClick(function () {
      $(".reminder-prompt").removeClass("reminder-promptShow").addClass("reminder-promptNone");
      $(".reminder-alert").removeClass("reminder-to-top").addClass("reminder-to-bottom");
      _0x46e386 && clearTimeout(_0x46e386);
      _0x46e386 = setTimeout(function () {
        $(".reminder-prompt").addClass("hidden");
      }, 450);
    });
    $(".order").fastClick(function () {
      if (_0x2b1164) {
        var _0x1360a6 = $(this).attr("jump-url");
        publicClient.setGdpTrace({}, "clk", {
          WT_area_name: "话费页底部",
          WT_area_type_1: "楼层",
          XY_env_type: "button",
          WT_envName: "我的订单",
          WT_event: "P00000051718",
          WT_next_url: _0x1360a6
        });
        cmcc.newWebview({
          debug: false,
          markID: "",
          type: "",
          funCode: "",
          bizCode: "",
          url: _0x1360a6,
          success: function (_0x1360a6) {},
          error: function (_0x1360a6) {}
        });
      } else {
        cmcc.showLogin();
      }
    });
    $(".drawInvoice").fastClick(function () {
      var _0x1360a6 = $(".drawInvoice").attr("jump-url");
      publicClient.setGdpTrace({}, "clk", {
        WT_area_name: "话费页底部",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: "电子发票",
        WT_event: "P00000051719",
        WT_next_url: _0x1360a6
      });
      cmcc.newWebview({
        debug: false,
        markID: "",
        type: "",
        funCode: "",
        bizCode: "",
        url: _0x1360a6,
        success: function (_0x1360a6) {},
        error: function (_0x1360a6) {}
      });
    });
    $(".unpaid-cancel").click(function () {
      $(".unpaid-prompt").addClass("hidden");
    });
    $(".unpaid-see").click(function () {
      if ($(".unpaid-prompt").addClass("hidden"), _0x2b1164) {
        cmcc.newWebview({
          debug: false,
          markID: "",
          type: "",
          funCode: "",
          bizCode: "",
          url: "https://h.app.coc.10086.cn/cmcc-app/app-pages/orderList.html",
          success: function (_0x1360a6) {},
          error: function (_0x1360a6) {}
        });
      } else {
        cmcc.showLogin();
      }
    });
    $(".recharge-content").on("fastClick", ".recharge-content-list", function () {
      var _0x1360a6 = $(this).attr("iconMessage");
      var _0x432351 = _0x5cb4b6.lili[_0x1360a6];
      _0x432351.publishLocation;
      var _0xb3954d = {
        0: "P00000051712",
        1: "P00000051713",
        2: "P00000051714",
        3: "P00000051715",
        4: "P00000051716"
      };
      publicClient.setGdpTrace({}, "clk", {
        WT_area_name: "更多充值",
        WT_area_type_1: "楼层",
        XY_env_type: "icon",
        WT_envName: _0x432351.iconName,
        WT_event: _0xb3954d[_0x1360a6],
        WT_next_url: _0x432351.actionUrl,
        XY_point_position: parseInt(_0x1360a6) + 1
      });
      _0x36330a(_0x432351);
    });
    $(_0x1360a6).on("resize", function () {
      var _0x432351 = $(_0x1360a6).height();
      _0x432351 && _0x174bb0 && _0x174bb0 == _0x432351 && !publicClient.versions.ios && ($(".tel-input").blur(), $(".money-input").blur());
    });
    $(".rechargeSms-codeBtn").off("click");
    $(".rechargeSms-codeBtn").click(function () {
      $(".rechargeSms-codeBtn").hasClass("disable") || ($(".rechargeSms-message").text(""), $(".rechargeSms-codeBtn").addClass("disable"), _0x29dd32());
    });
    $(".rechargeSms-code").on("blur", function () {
      var _0x432351 = document.documentElement.scrollTop || document.body.scrollTop;
      _0x1360a6.scrollTo(0, parseFloat(_0x432351) + 1);
    });
    $(".rechargeSms-code").on("focus", function () {
      $(".rechargeSms-message").text("");
    });
    $(".rechargeSms-code").on("input", function () {
      4 == $(".rechargeSms-code").val().length ? $(".rechargeSms-confirm").removeClass("disable") : $(".rechargeSms-confirm").addClass("disable");
    });
    $(".rechargeSms-cancel").off("click");
    $(".rechargeSms-cancel").click(function () {
      _0x2b69bf = 180;
      _0x5c9b6c && clearInterval(_0x5c9b6c);
      $(".rechargeSms-codeBtn").removeClass("disable").text("获取验证码");
      $(".rechargeSms-code").val("");
      $(".rechargeSms-prompt").addClass("hidden");
      _0x573a02();
    });
    $(".rechargeSms-close").off("click");
    $(".rechargeSms-close").click(function () {
      _0x2b69bf = 180;
      _0x5c9b6c && clearInterval(_0x5c9b6c);
      $(".rechargeSms-codeBtn").removeClass("disable").text("获取验证码");
      $(".rechargeSms-code").val("");
      $(".rechargeSms-prompt").addClass("hidden");
      _0x573a02();
      _0x2225e4 = null;
    });
    $(".rechargeSms-confirm").off("click");
    $(".rechargeSms-confirm").click(function () {
      $(".rechargeSms-confirm").hasClass("disable") || ($(".rechargeSms-message").text(""), _0x3e5545 = $(".rechargeSms-code").val(), 4 == _0x3e5545.length ? "coupon" == _0xf07e2f ? ($(".rechargeSms-prompt").addClass("hidden"), publicClient.singleButBack("本订单使用优惠券，下单后您需要在<span class=\"blue\">30分钟</span>内完成支付，如果操作中断，您可至<span class=\"blue\"><我的订单></span>页面继续支付或取消订单，取消后优惠券即时释放，否则优惠券将被锁定48小时哦！", "我知道了", function () {
        publicClient.showLoadPlug();
        _0x258add();
      })) : (publicClient.showLoadPlug(), _0x258add()) : $(".rechargeSms-message").text("验证码不正确，请核对后重新输入。"));
    });
    $(".num-list").on("fastClick", ".rule-item", function () {
      _0x18cd43 = $(this).attr("discval");
      $(".rule-item").removeClass("rule-active");
      $(this).addClass("rule-active");
      _0x26a397();
    });
    $(".num-list").on("fastClick", ".unit-order-product", function () {
      $(".unit-order-product").removeClass("unit-order-product-active");
      _0x5ee3f5 = "";
      _0x219e0f = false;
      _0x3ef60e = false;
      _0x20d200 = false;
      var _0x1360a6 = "";
      _0x31d566 == $(this).attr("discval") ? (_0x1360a6 = _0x31d566, _0x31d566 = "-1") : (_0x31d566 = $(this).attr("discval"), _0x1360a6 = _0x31d566, $(this).addClass("unit-order-product-active"));
      var _0x432351 = (_0x110885 && _0x110885[_0x1360a6] && _0x110885[_0x1360a6].presentCode || "").split("|")[0] || "";
      publicClient.setGdpTrace({}, "clk", {
        WT_area_name: "充值同定活动",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: (_0x110885[_0x1360a6] || {}).saleName,
        WT_event: "P00000059889",
        WT_si_n: (_0x110885[_0x1360a6] || {}).saleName,
        WT_si_x: "1",
        WT_goods_id: _0x432351,
        WT_sku_id: "",
        WT_adverType: "122"
      });
      _0x26a397();
    });
  }
  function _0x219f31(_0x1360a6) {
    _0x219e0f ? _0xb9ded1() : "-1" != _0x31d566 ? _0x34a6c0() : _0x20d200 ? _0x34a6c0() : "coupon" == _0xf07e2f ? publicClient.singleButBack("本订单使用优惠券，下单后您需要在<span class=\"blue\">30分钟</span>内完成支付，如果操作中断，您可至<span class=\"blue\"><我的订单></span>页面继续支付或取消订单，取消后优惠券即时释放，否则优惠券将被锁定48小时哦！", "我知道了", function () {
      publicClient.showLoadPlug();
      _0x258add(_0x1360a6);
    }) : (publicClient.showLoadPlug(), _0x258add(_0x1360a6));
  }
  function _0x8c9bd2() {
    $(".coupon-main,.coupon-main_yn, .interests-main, .mask-box-validate,.addtionSms").removeClass("coupon-mainShow").addClass("coupon-mainNone");
    $(".coupon-box, .interests-box, .mask-box-box").removeClass("reminder-to-top").addClass("reminder-to-bottom");
    $(".maskSms-code").val("");
    _0x46e386 && clearTimeout(_0x46e386);
    _0x46e386 = setTimeout(function () {
      $(".coupon-main,.coupon-main_yn, .interests-main, .mask-box-validate").addClass("hidden");
    }, 450);
  }
  function _0x493ebb() {
    $(".address-name").html("").removeClass("addActive lightBlue");
    $(".discount").addClass("hidden");
    $(".discounted-list").html("");
    $(".coupon-list").html("");
    $(".dis-text").html("--&nbsp;&nbsp;&nbsp;&nbsp;");
    _0x3654e7();
    $("#arrearage").addClass("hidden");
    $(".youhui").addClass("hidden");
    _0x2b1164 && ($(".cou-text, .interests-text").html("无可用").removeClass("blue"), $(".interests-text").html(""), $(".coupon-net, .interests-coupon-net").addClass("no-right"));
    _0x2b1164 != _0x2225e4 && ($(".balance").addClass("hidden"), $("#balanceMoney").text("--"));
    _0x1cbdea = null;
    _0x4441f9 = [];
    _0x5c0b1a = [];
    _0x5ebec7 = null;
    _0xf07e2f = null;
    _0x4c8354 = null;
    _0x9147b6 = null;
    _0x1546ea = false;
    _0x38a94c = {
      discountRules: [],
      discountCoupons: [],
      discountNoRules: [],
      discountNoCoupons: [],
      discountYN: [],
      festYNids: [],
      hascanOlay: false,
      hasCoupons: false,
      festType: "",
      festIndex: ""
    };
    _0xe3a961 = [];
    _0x264fbd = {
      interestsRules: [],
      interestsNoRules: []
    };
    _0x27ccc2 = null;
    _0x3c031b = null;
    _0x3d0c6d = false;
    _0x4a8f3e = "";
    _0x5d37ac = "";
    _0x3c3c8b = "";
    _0x44cbe1 = null;
    _0x80745a = "";
    _0x3e5545 = "";
    _0x361c0c = "";
    _0x3de03c = {
      maskBoxRules: [],
      maskBoxNoRules: [],
      maskRights: [],
      maskBlindRules: [],
      maskEnurl: _0x3de03c.maskEnurl,
      maskOrderStatue: null,
      blindOrderInfo: {}
    };
    _0x3ef60e = false;
    _0xe5922b = {
      addtionBoxRules: [],
      addtionBoxNoRules: [],
      addtionRights: [],
      addtionBlindRules: [],
      addtionEnurl: _0xe5922b.addtionEnurl,
      addtionOrderStatue: null,
      addtionOrderInfo: {}
    };
    _0x219e0f = false;
    _0x38715f = {};
    _0x17904f = "";
    _0x5ee3f5 = "";
    _0x41a07a = [];
    _0x1a53d0 = true;
    _0x18cd43 = "-1";
    _0x31d566 = "-1";
    _0x3c3c8b = "";
    _0x5ee3f5 = "";
    _0x546c96 = {
      productRules: [],
      productNoRules: [],
      productUnitRules: [],
      canUsePoint: [],
      userTotalPoint: 0,
      pointDesc: ""
    };
    _0x110885 = [];
    _0x20d200 = false;
    _0x316195 = 0;
    _0x2d4989 = 0;
    _0x269b4b = [];
    _0x2c5ef3 = null;
    _0x14fb03 = 6;
    _0x56b31e();
    _0x2de7bb = false;
    $(".point-box-detail").hasClass("active") && $(".point-box-detail").removeClass("active");
    _0x247bbf = -1;
    _0x1e2cbe = [];
    _0x93b9bd = null;
  }
  function _0xec44e6() {
    _0x493ebb();
    ftel = _0x611ed8(_0x2225e4);
    $(".tel").html(ftel).addClass("telActive");
    $(".edit").removeClass("hidden");
    $(".tel-input").val(ftel);
    try {
      _0x3a0301("qryflag");
    } catch (_0x320daa) {
      console.log(_0x320daa);
    }
    _0x5ce772();
  }
  function _0x5f332b(_0x1360a6, _0x432351) {
    var _0x1360a6 = _0x1360a6 && _0x1360a6.replace(/\s/g, "");
    var _0xb3954d = ["122,120,121,120,102,119,122,120,121,110", "49,50,51,52,53,54"];
    var _0x5ce772 = "";
    if (_0x1360a6 && 11 == _0x1360a6.length) {
      return _0x5ce772 = _0x1360a6;
    }
    try {
      var _0x13ad6e = recharge_H5module_inner.CryptoJS.enc.Utf8.stringify(recharge_H5module_inner.CryptoJS.enc.Base64.parse(_0x1360a6)).replace(/\s*/g, "");
      var _0x5ce772 = recharge_H5module_inner.decryptByADynamic(_0x13ad6e, _0xb3954d.join(","), _0xb3954d.reverse().join(","));
      _0x5ce772 = _0x5ce772.replace(/[^\d]/g, "");
    } catch (_0x3f644d) {
      _0x5ce772 = _0x2b1164;
      _0x432351 && (_0x5ce772 = _0x1360a6);
    } finally {
      return _0x5ce772;
    }
  }
  function _0x5258d0() {
    if (publicClient.getQueryString("telNo") && publicClient.getQueryString("cardNo")) {
      _0x2225e4 = publicClient.getQueryString("telNo");
      _0x2225e4 = _0x5f332b(_0x2225e4);
      _0x3dfb3d = _0x5f332b(publicClient.getQueryString("cardNo"), "cNo");
    } else {
      if (publicClient.getQueryString("telNo")) {
        _0x2225e4 = publicClient.getQueryString("telNo");
        _0x2225e4 = _0x5f332b(_0x2225e4);
      } else {
        if (publicClient.getQueryString("mobileNo")) {
          var _0x1360a6 = ["122,120,121,120,102,119,122,120,121,110", "49,50,51,52,53,54"];
          var _0x432351 = publicClient.getQueryString("mobileNo").replace(/\s/g, "");
          if (_0x432351 && 11 == _0x432351.length) {
            _0x2225e4 = _0x432351;
            _0x3c9259 = _0x2225e4;
          } else {
            try {
              var _0xb3954d = recharge_H5module_inner.CryptoJS.enc.Utf8.stringify(recharge_H5module_inner.CryptoJS.enc.Base64.parse(_0x432351)).replace(/\s*/g, "");
              var _0x5ce772 = recharge_H5module_inner.decryptByADynamic(_0xb3954d, _0x1360a6.join(","), _0x1360a6.reverse().join(","));
              _0x2225e4 = _0x5ce772.replace(/[^\d]/g, "");
              "86" == _0x2225e4.substring(0, 2) && (_0x2225e4 = _0x2225e4.substring(2));
              "0086" == _0x2225e4.substring(0, 4) && (_0x2225e4 = _0x2225e4.substring(4));
              _0x3c9259 = _0x2225e4;
            } catch (_0x33a7ab) {
              _0x2225e4 = _0x2b1164;
              publicClient.toastPlug("手机号码解析错误", 2000);
            }
          }
        } else {
          _0x26ca50.phoneNumber && (_0x2225e4 = _0x26ca50.phoneNumber);
        }
      }
    }
    _0x2225e4 ? (_0x2225e4 != _0x2b1164 && _0x5d7e2e(), _0xec44e6()) : _0x26a397();
    $(".benefit-box .benefit-list:visible").last().removeClass("onepx");
    publicClient.getQueryString("c") && (_0x3936d4 = publicClient.getQueryString("c"));
    publicClient.getQueryString("q.busida") && (_0x48ff75 = publicClient.getQueryString("q.busida"));
  }
  function _0x1ce26(_0x1360a6) {
    var _0x432351 = sessionStorage.getItem("jx-clound-fams");
    _0x432351 = _0x432351 ? recharge_H5module_inner.decryptByAES(_0x432351) : _0x432351;
    if (_0x432351) {
      _0x432351 = JSON.parse(_0x432351);
      for (var _0xb3954d = 0; _0xb3954d < _0x432351.length; _0xb3954d++) {
        _0x611ed8(_0x432351[_0xb3954d]) == _0x1360a6 && _0x432351.splice(_0xb3954d, 1);
      }
      _0x432351.length > 0 ? sessionStorage.setItem("jx-clound-fams", recharge_H5module_inner.encryptByAES(JSON.stringify(_0x432351))) : sessionStorage.removeItem("jx-clound-fams");
    }
  }
  function _0x5f1683(_0x1360a6) {
    try {
      var _0x432351 = localStorage.getItem("rhisphone");
      _0x432351 = _0x432351 ? recharge_H5module_inner.decryptByAES(_0x432351) : _0x432351;
      for (var _0xb3954d = _0x432351.split("-"), _0x5ce772 = 0; _0x5ce772 < _0xb3954d.length; _0x5ce772++) {
        _0xb3954d[_0x5ce772] == _0x1360a6 && _0xb3954d.splice(_0x5ce772, 1);
      }
      _0xb3954d = _0xb3954d.join("-");
      localStorage.setItem("rhisphone", recharge_H5module_inner.encryptByAES(_0xb3954d));
      _0x1ce26(_0x1360a6);
      _0x3a0301();
    } catch (_0x58c062) {}
  }
  function _0x25f1e8(_0x1360a6) {
    recharge_H5module_inner.getCloudFamilys({
      type: "get",
      userInfo: _0x26ca50,
      time: 1000,
      reqBody: {
        cellNum: _0x2b1164
      },
      success: function (_0x432351) {
        _0x1360a6(_0x432351.data);
      },
      error: function (_0x432351) {
        _0x1360a6();
      }
    });
  }
  function _0x3a0301(_0x432351) {
    if (_0x1360a6.localStorage) {
      if ("791" == _0x26ca50.province) {
        var _0xb3954d = sessionStorage.getItem("jx-clound-fams");
        _0xb3954d = _0xb3954d ? recharge_H5module_inner.decryptByAES(_0xb3954d) : _0xb3954d;
        _0xb3954d ? _0x4a6721(JSON.parse(_0xb3954d)) : "qryflag" == _0x432351 ? _0x25f1e8(function (_0x1360a6) {
          _0x1360a6 && _0x1360a6.length > 0 && sessionStorage.setItem("jx-clound-fams", recharge_H5module_inner.encryptByAES(JSON.stringify(_0x1360a6)));
          _0x4a6721(_0x1360a6);
        }) : _0x4a6721();
      } else {
        _0x4a6721();
      }
    }
  }
  function _0x361635(_0x1360a6, _0x432351) {
    var _0xb3954d = "";
    return _0xb3954d += "<div class=\"num-his-list onepx\"><span class=\"his-tel\">" + _0x1360a6 + "</span><span class=\"his-label\">" + _0x432351 + "</span><span class=\"del\"></span></div>";
  }
  function _0x4a6721(_0x432351) {
    try {
      if (_0x1360a6.localStorage) {
        var _0xb3954d = localStorage.getItem("rhisphone");
        _0xb3954d = _0xb3954d ? recharge_H5module_inner.decryptByAES(_0xb3954d) : _0xb3954d;
        var _0x5ce772 = "";
        var _0x13ad6e = "";
        var _0x57ee71 = "";
        if (_0xb3954d) {
          var _0x112757 = _0xb3954d.split("-");
          if (_0x112757.length > 0) {
            _0x432351 && _0x432351.length > 0 && (_0x112757 = _0x112757.filter(function (_0x1360a6) {
              return -1 == _0x432351.indexOf(_0x1360a6.replace(/[^\d]/g, ""));
            }));
            for (var _0x4f7a33 = 0; _0x4f7a33 < _0x112757.length; _0x4f7a33++) {
              if (_0x112757[_0x4f7a33]) {
                var _0x232a41 = "最近使用";
                _0x2b1164 == _0x112757[_0x4f7a33].replace(/[^\d]/g, "") ? (_0x232a41 = "我", _0x13ad6e += _0x361635(_0x611ed8(_0x112757[_0x4f7a33]), _0x232a41)) : _0x5ce772 += _0x361635(_0x611ed8(_0x112757[_0x4f7a33]), _0x232a41);
              }
            }
            for (var _0x4f7a33 = 0; _0x4f7a33 < (_0x432351 && _0x432351.length); _0x4f7a33++) {
              _0x57ee71 += _0x361635(_0x611ed8(_0x432351[_0x4f7a33]), "云家庭");
            }
          } else {
            for (var _0x4f7a33 = 0; _0x4f7a33 < (_0x432351 && _0x432351.length); _0x4f7a33++) {
              _0x57ee71 += _0x361635(_0x611ed8(_0x432351[_0x4f7a33]), "云家庭");
            }
          }
        } else {
          for (var _0x4f7a33 = 0; _0x4f7a33 < (_0x432351 && _0x432351.length); _0x4f7a33++) {
            _0x57ee71 += _0x361635(_0x611ed8(_0x432351[_0x4f7a33]), "云家庭");
          }
        }
        $(".num-his").html(_0x13ad6e + _0x5ce772 + _0x57ee71);
      }
    } catch (_0x279373) {}
  }
  function _0x2bc617(_0x432351) {
    try {
      if (_0x1360a6.localStorage) {
        var _0xb3954d = localStorage.getItem("rhisphone");
        _0xb3954d = _0xb3954d ? recharge_H5module_inner.decryptByAES(_0xb3954d) : _0xb3954d;
        var _0x5ce772;
        if (_0xb3954d) {
          _0x5ce772 = _0xb3954d.split("-");
          _0x5ce772.splice(0, 0, _0x432351);
          for (var _0x13ad6e = 1; _0x13ad6e < _0x5ce772.length; _0x13ad6e++) {
            _0x5ce772[_0x13ad6e] == _0x432351 && _0x5ce772.splice(_0x13ad6e, 1);
          }
          _0x5ce772 = _0x5ce772.slice(0, 5);
          _0x5ce772 = _0x5ce772.join("-");
        } else {
          _0x5ce772 = _0x432351;
        }
        localStorage.setItem("rhisphone", recharge_H5module_inner.encryptByAES(_0x5ce772));
        _0x3a0301();
      }
    } catch (_0x3a08a7) {}
  }
  function _0x4dfaba() {
    var _0x432351 = "0";
    _0x1360a6.location.href.indexOf("gray") > -1 && (_0x432351 = "2");
    var _0xb3954d = {
      title: "充值交费",
      link: "",
      imgUrl: "https://app.10086.cn/leadeon-cmcc-static/v2.0/images/recharge/shareRecharge.jpg",
      content: "使用#中国移动手机营业厅#充值交费，极速到账，再无停机烦恼，点击充值！",
      wx: {
        userName: "gh_77a83b248df1",
        path: "/pages/recharge/main?channel=1",
        miniProgramType: _0x432351,
        webpageUrl: "https://app.10086.cn/activity/transit/transferDownload.html",
        withShareTicket: "1",
        hdImageData: "https://app.10086.cn/leadeon-wx-rs/images/share/share07.png",
        title: "话费充值来这里，想充就充！",
        description: ""
      }
    };
    _0xb3954d.link = "https://touch.10086.cn/i/mobile/rechargecredit.html";
    cmcc.enableShared({
      debug: false,
      shareObj: _0xb3954d,
      success: function (_0x1360a6) {},
      error: function (_0x1360a6) {}
    });
  }
  function _0x611ed8(_0x1360a6) {
    if (_0x1360a6) {
      var _0x432351 = _0x1360a6.replace(/[^\d]/g, "");
      var _0xb3954d = _0x432351.split("");
      var _0x5ce772 = "";
      _0xb3954d.forEach(function (_0x1360a6, _0x432351) {
        (3 === _0x432351 || 7 === _0x432351) && (_0x5ce772 += " ");
        _0x5ce772 += _0x1360a6;
      });
      return _0x5ce772;
    }
  }
  function _0x23e0cd() {
    publicClient.showLoadPlug();
    recharge_H5module_inner.getUnpaidInfo({
      userInfo: _0x26ca50,
      reqBody: {
        cellNum: _0x2b1164,
        loginNo: _0x2b1164
      },
      noEncrypt: true,
      success: function (_0x1360a6) {
        publicClient.closeLoadPlug();
        "000000" != _0x1360a6.retCode || !_0x1360a6.data || "1" != _0x1360a6.data.unpaidFlag && "1" != _0x1360a6.data.couponFlag || 0 == _0x3de03c.maskOrderStatue || 0 == _0xe5922b.addtionOrderStatue || $(".unpaid-prompt").removeClass("hidden");
      },
      error: function (_0x1360a6) {
        publicClient.closeLoadPlug();
      }
    });
  }
  function _0x3504d0(_0x1360a6, _0x432351) {
    "undefined" != typeof recharge_H5module && recharge_H5module.getCommonBoard({
      userInfo: _0x26ca50,
      reqBody: {
        provinceCode: _0x1360a6,
        cityCode: _0x432351,
        busiType: "1",
        cellNum: _0x2b1164 || "99999999999"
      },
      success: function (_0x432351) {
        if ("000000" == _0x432351.retCode && _0x432351.rspBody && _0x432351.rspBody.commonBoardDbList) {
          var _0xb3954d = _0x432351.rspBody.commonBoardDbList.filter(function (_0x1360a6) {
            return 1 == _0x1360a6.advLocation;
          });
          if (_0x59d530 = _0xb3954d[0], _0x30f95a.list = _0x432351.rspBody.commonBoardDbList.filter(function (_0x1360a6) {
            return 2 == _0x1360a6.advLocation;
          }), _0x30f95a.list.length > 0) {
            publicClient.setGdpTrace({}, "imp", {
              WT_area_name: "走马灯入口",
              WT_area_type_1: "楼层",
              XY_env_type: "button",
              WT_event: "P00000051689",
              WT_envName: _0x30f95a.list[0].busiTitle,
              XY_gd_source: "",
              WT_markid: ""
            });
            var _0x5ce772 = $("#marquee").html();
            var _0x13ad6e = juicer(_0x5ce772, _0x30f95a);
            $(".marquee-box ul").html(_0x13ad6e).parent().removeClass("hidden");
            _0x30f95a.list.length > 1 ? _0x470179(function () {
              _0x3225b9(_0x30f95a.list);
            }) : 1 == _0x30f95a.list.length && ($(".marquee-box li").unbind(), $(".marquee-box").on("click", "li", function () {
              publicClient.setGdpTrace({}, "clk", {
                WT_area_name: "走马灯入口",
                WT_area_type_1: "楼层",
                XY_env_type: "button",
                WT_envName: _0x30f95a.list[0].busiTitle,
                WT_event: "P00000051689",
                WT_next_url: _0x30f95a.list[0].jumpUrl
              });
              _0x5eab75(_0x30f95a.list[0]);
            }));
          }
          if (_0xb3954d.length > 0) {
            var _0x57ee71 = {
              WT_area_name: "立即支付下方通栏",
              WT_area_type_1: "楼层",
              XY_env_type: "pic",
              WT_envName: _0x59d530.busiTitle,
              XY_gd_source: "",
              WT_markid: "",
              WT_event: "P00000051711",
              WT_next_url: _0x59d530.jumpUrl
            };
            "230" == _0x1360a6 ? ($("#AD1 img").attr("src", _0x59d530.imageUrl), $("#AD1").unbind().removeClass("hidden"), $("#AD1").click(function () {
              publicClient.setGdpTrace({}, "clk", _0x57ee71);
              "2" == _0x59d530.actionType ? _0x4b93d3(_0x59d530.jumpUrl, _0x59d530.id, "11", "", "") : _0x34e893(_0x59d530);
            })) : ($("#AD img").attr("src", _0x59d530.imageUrl), publicClient.setGdpTrace({}, "imp", {
              WT_area_name: "立即支付下方通栏",
              WT_area_type_1: "楼层",
              XY_env_type: "pic",
              WT_event: "P00000051711",
              WT_envName: _0x59d530.busiTitle,
              XY_gd_source: "",
              WT_markid: ""
            }), $("#AD").unbind().removeClass("hidden"), $("#AD").click(function () {
              publicClient.setGdpTrace({}, "clk", _0x57ee71);
              "2" == _0x59d530.actionType ? _0x4b93d3(_0x59d530.jumpUrl, _0x59d530.id, "11", "", "") : _0x34e893(_0x59d530);
            }));
          }
        }
      },
      error: function (_0x1360a6, _0x432351, _0xb3954d) {}
    });
  }
  function _0x1b0f85() {
    publicClient.showLoadPlug();
    recharge_H5module_inner.getJsCouponInfo({
      type: "post",
      noEncrypt: true,
      userInfo: _0x26ca50,
      reqBody: {
        cellNum: _0x2225e4,
        boxId: _0x38715f.boxId,
        skuId: _0x38715f.skuid,
        channel: "11"
      },
      async: true,
      dataType: "json",
      timeout: 2000,
      success: function (_0x1360a6) {
        publicClient.closeLoadPlug();
        "000000" == _0x1360a6.retCode ? _0x470179(function () {
          _0x30f796(_0x1360a6.data);
        }) : $("#js-coupons").addClass("hidden");
      },
      error: function () {}
    });
  }
  function _0x30f796(_0x1360a6) {
    var _0x432351 = $("#js-coupons-tpl").html();
    juicer.register("getDateChine", _0x75e4c8);
    var _0xb3954d = juicer(_0x432351, {
      list: _0x1360a6
    });
    if ($("#js-coupons-content").html(_0xb3954d), _0x1360a6 && _0x1360a6.length > 0 ? $("#js-coupons").removeClass("hidden") : $("#js-coupons").addClass("hidden"), _0x1360a6 && _0x1360a6.length > 1) {
      new Swiper("#js-coupons", {
        direction: "horizontal",
        speed: 1000,
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        scrollbarHide: false,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "js-coupon-my-bullet"
        }
      });
    }
    $("#js-coupons").off("click", ".just-use");
    $("#js-coupons").on("click", ".just-use", function () {
      var _0x432351 = $(this).attr("realIndex");
      _0x4b93d3(_0x1360a6[_0x432351] && _0x1360a6[_0x432351].jumpAppUrl);
    });
  }
  function _0x470179(_0x1360a6) {
    try {
      "function" != typeof Swiper ? $.getScript("../../js/plugin/swiper/swiper4.js", function () {
        _0x1360a6();
      }) : _0x1360a6();
    } catch (_0x387d35) {}
  }
  function _0x3225b9(_0x1360a6) {
    new Swiper("#recharge-aboard", {
      direction: "vertical",
      speed: 1000,
      autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      loop: true,
      scrollbarHide: false,
      observer: true,
      observeParents: true
    });
    $(".marquee-box").addClass("marqueeActive");
    $(".marquee-box li").unbind();
    $(".marquee-box").on("click", "li", function () {
      var _0x1360a6 = $(this).attr("realIndex");
      publicClient.setGdpTrace({}, "clk", {
        WT_area_name: "走马灯入口",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: _0x30f95a.list[_0x1360a6].busiTitle,
        WT_event: "P00000051689",
        WT_next_url: _0x30f95a.list[_0x1360a6].jumpUrl
      });
      _0x5eab75(_0x30f95a.list[_0x1360a6]);
    });
  }
  function _0x5eab75(_0x1360a6) {
    1 == _0x1360a6.jumpType ? cmcc.goNativePage({
      debug: false,
      bizCode: _0x1360a6.iconCode,
      success: function (_0x1360a6) {},
      error: function (_0x1360a6) {}
    }) : 2 == _0x1360a6.jumpType && (1 == _0x1360a6.loginType ? _0x2b1164 ? _0x37d9f7(_0x1360a6, "AD") : cmcc.showLogin() : 2 == _0x1360a6.loginType && _0x37d9f7(_0x1360a6, "AD"));
  }
  function _0x34e893(_0x1360a6) {
    var _0x432351 = _0x1360a6.ssoUrlAddr;
    var _0xb3954d = _0x1360a6.isSso;
    var _0x5ce772 = _0x1360a6.loginType;
    var _0x13ad6e = _0x1360a6.isShare;
    var _0x57ee71 = _0x1360a6.id;
    var _0x112757 = _0x1360a6.jumpUrl.indexOf("?");
    var _0x4f7a33 = _0x51fcdb(_0x1360a6.paramList, _0x26ca50);
    var _0x232a41 = "";
    if (0 == _0xb3954d && (-1 == _0x112757 ? (_0x1360a6.jumpUrl += "?", _0x4f7a33 = _0x4f7a33.substring(1)) : "?" == _0x1360a6.jumpUrl.substring(_0x112757) && (_0x4f7a33 = _0x4f7a33.substring(1))), 1 == _0x5ce772) {
      if (_0x2b1164) {
        if (1 == _0xb3954d) {
          var _0xd89ed2 = new Date().getTime();
          _0x232a41 = _0x432351 + _0x1360a6.jumpUrl + _0x4f7a33 + "&timestamp=" + _0xd89ed2;
        } else {
          _0x232a41 = _0x1360a6.jumpUrl + _0x4f7a33;
        }
      } else {
        cmcc.showLogin();
      }
    } else {
      2 == _0x5ce772 && (_0x232a41 = _0x1360a6.jumpUrl + _0x4f7a33);
    }
    "" != _0x232a41 && (1 == _0x13ad6e ? _0x4b93d3(_0x232a41, _0x57ee71, "11", "DF015") : _0x1360a6.iconCode ? parseFloat(_0x26ca50.version) < 4.1 ? _0x4b93d3(_0x232a41, _0x57ee71, "", "") : _0x4b93d3(_0x232a41, _0x57ee71, "", "", _0x1360a6.iconCode) : _0x4b93d3(_0x232a41, _0x57ee71, "", ""));
  }
  function _0x4be5d4() {
    publicClient.showLoadPlug();
    "undefined" != typeof recharge_H5module && recharge_H5module.getNewIconListForOtherPage({
      userInfo: _0x26ca50,
      reqBody: {
        provinceCode: _0x26ca50.province,
        cityCode: _0x26ca50.city,
        iconImgType: 200,
        funCode: "104105",
        cellNum: _0x26ca50.phoneNumber
      },
      success: function (_0x1360a6) {
        if (publicClient.closeLoadPlug(), "000000" == _0x1360a6.retCode && _0x1360a6.rspBody.dirList && _0x1360a6.rspBody.dirList.length >= 1 && _0x1360a6.rspBody.dirList[0].iconList && _0x1360a6.rspBody.dirList[0].iconList.length > 0) {
          _0x5cb4b6.lili = _0x1360a6.rspBody.dirList[0].iconList;
          var _0x432351 = $("#iconlist").html();
          var _0xb3954d = juicer(_0x432351, _0x5cb4b6);
          if ($(".recharge-content").html(_0xb3954d), !_0x2d1915) {
            $(".recharge-more").removeClass("hidden");
            var _0x5ce772 = {
              type: "once"
            };
            var _0x13ad6e = {
              0: "P00000051712",
              1: "P00000051713",
              2: "P00000051714",
              3: "P00000051715",
              4: "P00000051716"
            };
            _0x5cb4b6.lili.forEach(function (_0x1360a6, _0x432351) {
              _0x5ce772[_0x13ad6e[_0x432351]] = JSON.stringify({
                WT_et: "imp",
                type: "once",
                XY_env_type: "icon",
                WT_event: _0x13ad6e[_0x432351],
                WT_envName: _0x1360a6.iconName,
                XY_point_position: parseInt(_0x432351) + 1
              });
            });
            _0x5ce772.WT_area_type_1 = "楼层";
            _0x5ce772.WT_area_name = "更多充值";
            publicClient.setGdpTrace({}, "imp", _0x5ce772);
          }
        }
      },
      error: function (_0x1360a6, _0x432351, _0xb3954d) {
        publicClient.closeLoadPlug();
      }
    });
  }
  function _0x36330a(_0x1360a6) {
    if (2 == _0x1360a6.iconType || 4 == _0x1360a6.iconType) {
      "1" == _0x1360a6.isShare ? _0x4b93d3(_0x1360a6.actionUrl, _0x1360a6.iconConfigId, "30", _0x1360a6.iconCode) : _0x4b93d3(_0x1360a6.actionUrl, "", "", _0x1360a6.iconCode);
    } else {
      if (5 == _0x1360a6.iconType) {
        1 == _0x1360a6.loginType ? _0x26ca50.phoneNumber ? _0x37d9f7(_0x1360a6, "ICON") : cmcc.showLogin() : 2 == _0x1360a6.loginType && _0x37d9f7(_0x1360a6, "ICON");
      } else {
        if (1 == _0x1360a6.iconType) {
          _0x5bf168(_0x1360a6.iconCode);
        } else {
          if (6 == _0x1360a6.iconType) {
            var _0x432351 = _0x1360a6.packageName;
            var _0xb3954d = _0x1360a6.startPage;
            cmcc.startPlugin({
              debug: false,
              pluginPackageName: _0x432351,
              pluginPageName: _0xb3954d,
              success: function (_0x1360a6) {},
              error: function (_0x1360a6) {}
            });
          }
        }
      }
    }
  }
  function _0x37d9f7(_0x1360a6, _0x432351) {
    var _0xb3954d = "AD" == _0x432351 ? "11" : "30";
    var _0x5ce772 = _0x1360a6.ssoUrlAddr;
    var _0x13ad6e = _0x1360a6.isSso;
    var _0x57ee71 = _0x1360a6.isShare || "";
    var _0x112757 = _0x1360a6.paramList;
    var _0x4f7a33 = _0x1360a6.loginType;
    var _0x232a41 = "AD" == _0x432351 ? _0x1360a6.id : _0x1360a6.iconConfigId;
    var _0xd89ed2 = _0x1360a6.jumpUrl || _0x1360a6.actionUrl;
    var _0x1509b2 = _0xd89ed2.indexOf("?");
    var _0x27340f = _0x51fcdb(_0x112757, _0x26ca50);
    if (0 == _0x13ad6e && (-1 == _0x1509b2 ? (_0xd89ed2 += "?", _0x27340f = _0x27340f.substring(1)) : "?" == _0xd89ed2.substring(_0x1509b2) && (_0x27340f = _0x27340f.substring(1))), 1 == _0x4f7a33) {
      if (1 == _0x13ad6e) {
        var _0xb9ded1 = new Date().getTime();
        _0xd89ed2 = _0x5ce772 + _0xd89ed2 + _0x27340f + "&timestamp=" + _0xb9ded1;
      } else {
        _0xd89ed2 += _0x27340f;
      }
    } else {
      2 == _0x4f7a33 && (_0xd89ed2 += _0x27340f);
    }
    "" != _0xd89ed2 && (1 == _0x57ee71 ? _0x4b93d3(_0xd89ed2, _0x232a41, _0xb3954d, "") : _0x4b93d3(_0xd89ed2, _0x232a41, "", ""));
  }
  function _0x51fcdb(_0x1360a6, _0x432351) {
    if (_0x1360a6 && _0x1360a6.length > 0) {
      var _0xb3954d = [];
      paramListUrl = "";
      for (var _0x5ce772 = 0; _0x5ce772 < _0x1360a6.length; _0x5ce772++) {
        _0xb3954d.push(_0x1360a6[_0x5ce772].paramId);
      }
      for (var _0x5ce772 = _0xb3954d.length - 1; _0x5ce772 >= 0; _0x5ce772--) {
        "UID" == _0xb3954d[_0x5ce772] ? paramListUrl += "&" + _0x1e74b6 : "provinceCode" == _0xb3954d[_0x5ce772] ? paramListUrl += "&provinceCode=" + _0x432351.province : "cityCode" == _0xb3954d[_0x5ce772] ? paramListUrl += "&cityCode=" + _0x432351.city : "clientVer" == _0xb3954d[_0x5ce772] ? paramListUrl += "&clientVer=" + _0x432351.version : "devType" == _0xb3954d[_0x5ce772] ? paramListUrl += "&devType=" + _0x432351.st : "clientId" == _0xb3954d[_0x5ce772] ? paramListUrl += "&clientId=" + _0x432351.clientID : "scnType" == _0xb3954d[_0x5ce772] ? paramListUrl += "&scnType=" + _0x432351.sp : "telNo" == _0xb3954d[_0x5ce772] ? paramListUrl += "&telNo=" + _0x194e01 : paramListUrl += "&" + _0xb3954d[_0x5ce772] + "=no";
      }
      return paramListUrl;
    }
    return "";
  }
  function _0x5bf168(_0x1360a6) {
    cmcc.goNativePage({
      debug: false,
      bizCode: _0x1360a6
    });
  }
  function _0x4b93d3(_0x1360a6, _0x432351, _0xb3954d, _0x5ce772, _0x13ad6e) {
    var _0x13ad6e = _0x13ad6e || "";
    cmcc.newWebview({
      debug: false,
      markID: _0x432351,
      type: _0xb3954d,
      funCode: _0x5ce772,
      bizCode: _0x13ad6e,
      url: _0x1360a6,
      success: function (_0x1360a6) {},
      error: function (_0x1360a6) {}
    });
  }
  function _0x12ce25() {
    var _0x1360a6 = ["43fd", "d4d6", "02ea", "9e57"];
    sessionStorage.setItem("choose_money", 0);
    _0x2de7bb = false;
    _0x247bbf = -1;
    $(".point-box-detail").hasClass("active") && $(".point-box-detail").removeClass("active");
    _0x4bf490 = 0;
    $(".contacts-name").html("");
    cmcc.getUserInfo({
      debug: false,
      success: function (_0x432351) {
        _0x432351.token ? ($(".page,.footer-box").removeClass("hidden"), $("#load-plug-init").addClass("hidden"), publicClient.closeLoadPlug(), publicClient.showLoadPlug(), cmcc.checkSessionIsvalid({
          debug: false,
          success: function (_0xb3954d) {
            1 == _0xb3954d.status ? (_0x432351.dealNoStr = recharge_H5module_inner.encryptByECBAES(_0x432351.phoneNumber, _0x1360a6.reverse().join(""), ""), publicClient.setGdpTrace(_0x432351), publicClient.setGdpTrace({}, "pageview", {
              WT_event: "H5PageShow",
              WT_plat: "30011"
            }), _0x4cf199(_0x432351)) : cmcc.overTime({
              debug: false,
              success: function (_0x1360a6) {},
              error: function (_0x1360a6) {}
            });
          },
          error: function (_0x1360a6) {
            cmcc.showLogin();
          }
        })) : cmcc.showLogin();
      },
      error: function (_0x1360a6) {
        publicClient.singleButBack("尊敬的用户，请您登录后再充值。", "去登录", function () {
          cmcc.showLogin();
        });
      }
    });
  }
  function _0x2eba40(_0x1360a6, _0x432351) {
    var _0xb3954d = _0x432351 || "B3A128FA";
    return _0xb3954d + _0x1360a6 + _0xb3954d;
  }
  function _0x14d417(_0x1360a6, _0x432351) {
    var _0xb3954d = _0x432351 || "";
    var _0x5ce772 = recharge_H5module_inner.CryptoJS.enc.Utf8.parse(_0xb3954d);
    return recharge_H5module_inner.CryptoJS.HmacMD5(_0x1360a6, _0x5ce772).toString();
  }
  function _0xf89011(_0x1360a6) {
    var _0x432351 = recharge_H5module_inner.CryptoJS.enc.Utf8.parse(_0x1360a6 || "");
    return recharge_H5module_inner.CryptoJS.enc.Base64.stringify(_0x432351);
  }
  function _0x117d29() {
    var _0x1360a6 = [].slice.call(arguments);
    return function (_0x432351, _0xb3954d, _0x5ce772) {
      var _0x13ad6e = [].slice.call(arguments);
      return _0x1360a6.reduceRight(function (_0x1360a6, _0x432351, _0xb3954d) {
        return _0x432351(_0x1360a6, _0x13ad6e[_0xb3954d + 1] || "");
      }, _0x432351);
    };
  }
  function _0x4cf199(_0x432351) {
    if (_0x3abc5d = 1, _0x26ca50 = _0x432351, _0x4dfaba(), _0x13ad6e(_0x26ca50.loginProvince), _0x929439(_0x26ca50.loginProvince), _0x26ca50.phoneNumber) {
      if ("10.2.1" != _0x26ca50.version && "Y1000" != _0x26ca50.channel || (_0x9f3757 = "1"), parseFloat(_0x26ca50.version) >= 5.2 && _0x26ca50.carrierOperator && "002" !== _0x26ca50.carrierOperator && (_0x2d1915 = true), _0x26ca50.token = _0x26ca50.token.replace(/\s/g, ""), $(".cou-text").removeClass("blue").html(""), _0x2d1915) {
        _0x2a2c6f = _0x26ca50.phoneNumber;
        _0x3d9080 = "?" + _0x26ca50.token.replace(/\s/g, "");
        _0x2b1164 = _0x26ca50.phoneNumber = _0x26ca50.token = "";
        $(".coupon-net,.order,.drawInvoice,.recharge-more").addClass("hidden");
        $(".footer-item").eq(0).addClass("only");
        _0x570652();
      } else {
        _0x813e0d = "?" + _0x26ca50.token.replace(/\s/g, "");
        _0x1e74b6 = publicClient.getUid(_0x26ca50.token);
        _0x1e74b6 && (_0x1e74b6 = _0x1e74b6.substring(4));
        var _0xb3954d = recharge_H5module_inner.getUserBaseInfo(_0x26ca50);
        var _0x5ce772 = _0x117d29(_0x14d417, _0x2eba40)(_0x1e74b6, "", "");
        var _0x57ee71 = recharge_H5module_inner.encryptByAES(JSON.stringify({
          UID: _0x1e74b6,
          sign: _0x5ce772,
          deviceInfo: _0xb3954d
        }));
        var _0x112757 = _0x26ca50.phoneNumber || "";
        _0x112757 = _0x112757.substring(0, 2) + "" + _0x112757.substring(3);
        recharge_H5module_inner.getAssertion({
          type: "post",
          noEncrypt: true,
          userInfo: _0x26ca50,
          reqBody: {
            data: _0x57ee71,
            cellNum: _0x112757
          },
          dataType: "json",
          contentType: "application/json",
          time: 5000,
          success: function (_0x432351) {
            if (_0x432351) {
              if ("000000" == _0x432351.retCode) {
                if (_0x432351.data && _0x432351.data.hasOwnProperty("update")) {
                  return void (_0x1360a6.location.href = "./maintainPage.html");
                }
                _0x2b1164 = _0x26ca50.phoneNumber;
                _0x3504d0(_0x26ca50.loginProvince, _0x26ca50.loginCity);
                setTimeout(function () {
                  _0xd89ed2(_0x26ca50.loginProvince, _0x26ca50.loginCity);
                }, 500);
                try {
                  _0x270ced();
                } catch (_0x4dc716) {}
              } else {
                "400000/400010/550009/550018/999999".indexOf(_0x432351.retCode) > -1 && publicClient.singleButBack("尊敬的用户您好，当前充值服务繁忙，后台正在为您努力重试中，您可手动返回或重新登录APP重试！", "返回重试", function () {
                  cmcc.overTime();
                });
              }
            } else {
              cmcc.showLogin();
            }
            _0x570652();
          },
          error: function (_0x1360a6) {
            if (_0x2b1164 = _0x26ca50.phoneNumber, "555" == _0x1360a6.status) {
              return void publicClient.singleButBack("尊敬的用户您好，当前充值服务繁忙，后台正在为您努力重试中，您可手动返回或重新登录APP重试~", "返回重试", function () {
                cmcc.overTime();
              });
            }
            publicClient.singleButBack("尊敬的用户您好，当前充值服务繁忙，后台正在为您努力重试中，您可手动返回或重新登录APP重试~~", "返回重试", function () {
              cmcc.overTime();
            });
          }
        });
      }
    } else {
      publicClient.singleButBack("尊敬的用户，请您登录后再充值。", "去登录", function () {
        cmcc.showLogin();
      });
    }
  }
  function _0x570652() {
    _0x4be5d4();
    _0x5258d0();
  }
  function _0x24b842() {
    publicClient.showLoadPlug();
    var _0x1360a6 = "";
    var _0x432351 = _0x38715f && _0x38715f.boxId;
    var _0xb3954d = _0x38715f && _0x38715f.skuid;
    var _0x5ce772 = _0x110885[_0x31d566] || {};
    _0x20d200 && (_0x5ce772 = _0x269b4b[0]);
    ("-1" != _0x31d566 || _0x20d200) && (_0x1360a6 = "2", _0x432351 = "", _0xb3954d = "");
    recharge_H5module_inner.sendRightSmsCode({
      type: "post",
      noEncrypt: true,
      userInfo: _0x26ca50,
      reqBody: {
        cellNum: _0x2225e4,
        boxId: _0x432351,
        skuId: _0xb3954d,
        smsType: _0x1360a6,
        channel: "11",
        operateId: _0x5ce772.operateId || "",
        birthRules: "",
        tariffStandard: "",
        saleName: ""
      },
      async: false,
      dataType: "json",
      timeout: 2000,
      success: function (_0x1360a6) {
        publicClient.closeLoadPlug();
        "000000" == _0x1360a6.retCode ? (_0x17904f = _0x1360a6.data && _0x1360a6.data.serialNo, $(".maskSms-codeBtn").text(_0x2b69bf + "s后重试"), _0x5c9b6c = setInterval(function () {
          $(".maskSms-codeBtn").text(_0x2b69bf + "s后重试");
          0 == --_0x2b69bf && (_0x2b69bf = 60, $(".maskSms-codeBtn").removeClass("disable").text("重新获取"), clearInterval(_0x5c9b6c));
        }, 1000)) : "500003" == _0x1360a6.retCode ? (_0x3654e7(), $(".maskSms-codeBtn").removeClass("disable"), _0x8c9bd2(), publicClient.showDialogPlug("尊敬的用户，只能给登录号码充值", "知道了")) : "510001" == _0x1360a6.retCode ? (_0x3654e7(), $(".maskSms-codeBtn").removeClass("disable"), publicClient.toastMsgPlug("验证码获取失败，请重新获取", 2000)) : "510007" == _0x1360a6.retCode ? (_0x3654e7(), $(".maskSms-codeBtn").removeClass("disable"), publicClient.toastMsgPlug("验证码获取频繁，请稍后再试", 2000)) : "510008" == _0x1360a6.retCode ? (_0x3654e7(), $(".maskSms-codeBtn").removeClass("disable"), publicClient.toastMsgPlug("当天验证码获取超过5次，请明日再试", 2000)) : /^4\d{5}$/.test(_0x1360a6.retCode) ? cmcc.overTime() : ($(".maskSms-codeBtn").removeClass("disable"), publicClient.toastPlug(_0x1360a6.retMsg || "服务器开小差了，您稍后再试", 2000), _0x8c9bd2());
      },
      error: function () {
        publicClient.closeLoadPlug();
        $(".maskSms-codeBtn").removeClass("disable");
        publicClient.toastPlug("服务器开小差了，您稍后再试", 2000);
      }
    });
  }
  function _0x29dd32() {
    publicClient.showLoadPlug();
    recharge_H5module_inner.getSmsCode({
      type: "post",
      userInfo: _0x26ca50,
      reqBody: {
        cellNum: _0x2225e4,
        payPhoneNo: _0x2b1164,
        rechargeNo: _0x2225e4
      },
      async: false,
      dataType: "json",
      timeout: 2000,
      success: function (_0x1360a6) {
        publicClient.closeLoadPlug();
        "000000" == _0x1360a6.retCode ? ($(".rechargeSms-codeBtn").text(_0x2b69bf + "S"), _0x5c9b6c = setInterval(function () {
          $(".rechargeSms-codeBtn").text(_0x2b69bf + "S");
          0 == --_0x2b69bf && (_0x2b69bf = 180, $(".rechargeSms-codeBtn").removeClass("disable").text("重新获取"), clearInterval(_0x5c9b6c));
        }, 1000)) : /^4\d{5}$/.test(_0x1360a6.retCode) ? cmcc.overTime() : ($(".rechargeSms-codeBtn").removeClass("disable"), publicClient.toastPlug("服务器开小差了，您稍后再试", 2000));
      },
      error: function () {
        publicClient.closeLoadPlug();
        $(".rechargeSms-codeBtn").removeClass("disable");
        publicClient.toastPlug("服务器开小差了，您稍后再试", 2000);
      }
    });
  }
  function _0x4edb27() {
    var _0x1360a6;
    var _0x432351 = _0x4cbaf4(_0x38a94c.discountRules, _0x38a94c.discountCoupons, _0xec0045);
    var _0xb3954d = false;
    var _0x5ce772 = [];
    if (_0x432351 && _0x432351.map(function (_0x432351, _0x13ad6e) {
      _0x432351.hasOwnProperty("aMon") && (0 == _0x13ad6e ? _0x1360a6 = _0x432351 : (_0x5ce772.push(_0x432351), 3 == _0x13ad6e && (_0xb3954d = true)));
    }), _0xb3954d) {
      var _0x13ad6e = 0;
      var _0x57ee71 = _0x5ce772 && _0x5ce772.map(function (_0x1360a6) {
        return _0x1360a6.saleData;
      });
      _0x57ee71 = _0x57b50c(_0x57ee71);
      _0x13ad6e = _0x5c0fa1(_0x57ee71);
      return _0x1360a6 && _0x1360a6.present > _0x13ad6e ? _0x1360a6.saleData : _0x57ee71;
    }
    return _0x1360a6 && _0x1360a6.saleData;
  }
  function _0x5c0fa1(_0x1360a6) {
    for (var _0x432351 = _0xec0045, _0xb3954d = _0xec0045, _0x5ce772 = 0; _0x5ce772 < _0x1360a6.length; _0x5ce772++) {
      var _0x13ad6e = _0x3aa9dd(_0x1360a6[_0x5ce772], _0xec0045, _0x432351, _0xb3954d);
      _0x432351 = _0x13ad6e.pMon;
      _0xb3954d = _0x13ad6e.aMon;
    }
    return _0xb3954d / (_0x432351 + 1);
  }
  function _0x4cbaf4(_0x1360a6, _0x432351, _0xb3954d) {
    var _0x5ce772 = _0x1360a6.concat(_0x432351);
    return _0x5ce772.length > 0 && _0x5ce772.reduce(function (_0x1360a6, _0x432351) {
      var _0x5ce772 = _0x655f91(_0x432351, _0xb3954d);
      "coupon" == _0x5ce772.saleData.type && "1" == _0x5ce772.saleData.canOlay || _0x1360a6[0].present < _0x5ce772.present && (_0x1360a6[0] = _0x5ce772);
      "rule" == _0x5ce772.saleData.type && "1" == _0x5ce772.saleData.canOlay && _0x1360a6[1].present < _0x5ce772.present && (_0x1360a6[1] = _0x5ce772);
      "coupon" == _0x5ce772.saleData.type && "1" == _0x5ce772.saleData.canOlay ? _0x1360a6[2].present < _0x5ce772.present && (_0x1360a6[2] = _0x5ce772) : "coupon" == _0x5ce772.saleData.type && _0x1360a6[3].present < _0x5ce772.present && (_0x1360a6[3] = _0x5ce772);
      return _0x1360a6;
    }, [{
      present: 0
    }, {
      present: 0
    }, {
      present: 0
    }, {
      present: 0
    }]);
  }
  function _0x3aa9dd(_0x1360a6, _0x432351, _0xb3954d, _0x5ce772) {
    var _0x13ad6e = {
      pMon: _0xb3954d,
      aMon: _0x5ce772
    };
    _0x1360a6 && "rule" == _0x1360a6.type ? _0x13ad6e = _0x3a91e4(Number(_0x432351), Number(_0x1360a6.saleType), _0x1360a6, _0x1360a6.discountFormat || "") : _0x1360a6 && "coupon" == _0x1360a6.type && (_0x13ad6e = _0x217c1a(Number(_0xb3954d), Number(_0x5ce772), _0x1360a6.saleType, _0x1360a6.discountFormat || 0, _0x1360a6.saleCode, _0x1360a6.capDiscount));
    _0x13ad6e.present = _0x13ad6e.aMon / (_0x13ad6e.pMon + 1);
    _0x13ad6e.saleData = _0x1360a6;
    return _0x13ad6e;
  }
  function _0x57b50c(_0x1360a6) {
    var _0x432351 = [];
    var _0xb3954d = [];
    var _0x5ce772 = [];
    var _0x13ad6e = [];
    var _0x57ee71 = _0x1360a6 && _0x1360a6.filter(function (_0x1360a6) {
      if (_0x1360a6 && "rule" == _0x1360a6.type) {
        _0x5ce772.push(_0x1360a6);
      } else {
        if (_0x1360a6 && "10" == _0x1360a6.saleType) {
          _0xb3954d.push(_0x1360a6);
        } else {
          if (!_0x1360a6 || "8" != _0x1360a6.saleType || null == _0x1360a6.capDiscount || undefined === _0x1360a6.capDiscount) {
            return _0x1360a6;
          }
          _0x432351.push(_0x1360a6);
        }
      }
    });
    _0x57ee71 = _0x57ee71 || [];
    var _0x112757 = _0x5ce772.concat(_0x57ee71).concat(_0x432351).concat(_0xb3954d);
    if (2 == _0x432351.length) {
      _0x13ad6e = [_0x432351[1], _0x432351[0]];
      var _0x4f7a33 = _0x5ce772.concat(_0x57ee71).concat(_0x13ad6e).concat(_0xb3954d);
      _0x5c0fa1(_0x4f7a33) > _0x5c0fa1(_0x112757) && (_0x112757 = _0x4f7a33);
    }
    return _0x112757;
  }
  function _0x52a294(_0x1360a6, _0x432351) {
    var _0xb3954d = {};
    var _0x5ce772 = $(_0x432351).attr("typepos");
    var _0x13ad6e = _0x5ce772 && _0x5ce772.split(":");
    if ("A" == _0x13ad6e[0] || "B" == _0x13ad6e[0] ? _0xb3954d = _0x4441f9[_0x13ad6e[1]] : "C" != _0x13ad6e[0] && "D" != _0x13ad6e[0] || (_0xb3954d = _0x5c0b1a[_0x13ad6e[1]]), _0x432351.hasClass("discount-itemActive")) {
      _0x432351.removeClass("discount-itemActive");
      _0x41a07a.splice(_0x41a07a.indexOf(_0x1360a6), 1);
    } else {
      if ("rule" == _0xb3954d.type) {
        if ("0" == _0xb3954d.canOlay) {
          _0x27c19c();
        } else {
          if ("1" == _0xb3954d.canOlay) {
            if (_0x41a07a.length > 0) {
              for (var _0x57ee71 = 0; _0x57ee71 < _0x38a94c.discountRules.length; _0x57ee71++) {
                if ("0" == _0x38a94c.discountRules[_0x57ee71].canOlay && _0x41a07a[0] == _0x38a94c.discountRules[_0x57ee71].operateId) {
                  _0x27c19c();
                  break;
                }
              }
            }
            for (var _0x57ee71 = 0; _0x57ee71 < _0x38a94c.discountRules.length; _0x57ee71++) {
              for (var _0x112757 = 0; _0x112757 < _0x41a07a.length; _0x112757++) {
                if ("1" == _0x38a94c.discountRules[_0x57ee71].canOlay && _0x41a07a[_0x112757] == _0x38a94c.discountRules[_0x57ee71].operateId) {
                  $("." + _0x41a07a[_0x112757]).removeClass("discount-itemActive");
                  _0x41a07a.splice(_0x41a07a.indexOf(_0x41a07a[_0x112757]), 1);
                  break;
                }
              }
            }
          }
        }
      } else {
        if ("coupon" == _0xb3954d.type) {
          if (_0x41a07a.length > 0) {
            for (var _0x57ee71 = 0; _0x57ee71 < _0x38a94c.discountRules.length; _0x57ee71++) {
              if ("0" == _0x38a94c.discountRules[_0x57ee71].canOlay && _0x41a07a[0] == _0x38a94c.discountRules[_0x57ee71].operateId) {
                _0x27c19c();
                break;
              }
            }
          }
          if ("0" == _0xb3954d.canOlay) {
            for (var _0x57ee71 = 0; _0x57ee71 < _0x38a94c.discountCoupons.length; _0x57ee71++) {
              for (var _0x112757 = 0; _0x112757 < _0x41a07a.length; _0x112757++) {
                if ("0" == _0x38a94c.discountCoupons[_0x57ee71].canOlay && _0x41a07a[_0x112757] == _0x38a94c.discountCoupons[_0x57ee71].pcardNo) {
                  $("." + _0x41a07a[_0x112757]).removeClass("discount-itemActive");
                  _0x41a07a.splice(_0x41a07a.indexOf(_0x41a07a[_0x112757]), 1);
                  break;
                }
              }
            }
          } else {
            if ("1" == _0xb3954d.canOlay) {
              for (var _0x57ee71 = 0; _0x57ee71 < _0x38a94c.discountCoupons.length; _0x57ee71++) {
                for (var _0x112757 = 0; _0x112757 < _0x41a07a.length; _0x112757++) {
                  if ("1" == _0x38a94c.discountCoupons[_0x57ee71].canOlay && _0x41a07a[_0x112757] == _0x38a94c.discountCoupons[_0x57ee71].pcardNo) {
                    $("." + _0x41a07a[_0x112757]).removeClass("discount-itemActive");
                    _0x41a07a.splice(_0x41a07a.indexOf(_0x41a07a[_0x112757]), 1);
                    break;
                  }
                }
              }
            }
          }
        }
      }
      _0x41a07a.push(_0x1360a6);
      _0x432351.addClass("discount-itemActive");
      _0x432351.addClass("" + _0x1360a6);
    }
  }
  function _0x27c19c() {
    _0x41a07a.splice(0, _0x41a07a.length);
    $(".discount-item").removeClass("discount-itemActive");
  }
  function _0x29c538() {
    for (var _0x1360a6 = [], _0x432351 = [], _0xb3954d = $(".coupon-main-yn").attr("choosedstr") && $(".coupon-main-yn").attr("choosedstr").split(",") || [], _0x5ce772 = 0; _0x5ce772 < _0xb3954d.length; _0x5ce772++) {
      _0x1360a6.push(_0xb3954d[_0x5ce772]);
    }
    for (var _0x5ce772 = 0; _0x5ce772 < _0x1360a6.length; _0x5ce772++) {
      for (var _0x13ad6e = 0; _0x13ad6e < _0x38a94c.discountRules.length; _0x13ad6e++) {
        if (_0x38a94c.discountRules[_0x13ad6e].operateId == _0x1360a6[_0x5ce772]) {
          _0x432351.push(_0x38a94c.discountRules[_0x13ad6e]);
          break;
        }
      }
      for (var _0x13ad6e = 0; _0x13ad6e < _0x38a94c.discountCoupons.length; _0x13ad6e++) {
        if (_0x38a94c.discountCoupons[_0x13ad6e].pcardNo == _0x1360a6[_0x5ce772]) {
          _0x432351.push(_0x38a94c.discountCoupons[_0x13ad6e]);
          break;
        }
      }
    }
    return _0x432351;
  }
  function _0x212c5e() {
    if (0 == _0x41a07a.length) {
      return void publicClient.toastMsgPlug("优惠活动不能为空。", 2000);
    }
    if (1 == _0x41a07a.length) {
      for (var _0x1360a6 = 0; _0x1360a6 < _0x38a94c.discountCoupons.length; _0x1360a6++) {
        if (_0x41a07a[0] == _0x38a94c.discountCoupons[_0x1360a6].pcardNo && "1" == _0x38a94c.discountCoupons[_0x1360a6].canOlay) {
          return void publicClient.toastMsgPlug("叠加券需和话费券叠加使用", 2000);
        }
      }
    } else {
      if (2 == _0x41a07a.length) {
        for (var _0x432351 = false, _0x1360a6 = 0; _0x1360a6 < _0x38a94c.discountCoupons.length; _0x1360a6++) {
          "0" == _0x38a94c.discountCoupons[_0x1360a6].canOlay && (_0x41a07a[0] == _0x38a94c.discountCoupons[_0x1360a6].pcardNo && (_0x432351 = true), _0x41a07a[1] == _0x38a94c.discountCoupons[_0x1360a6].pcardNo && (_0x432351 = true));
        }
        if (!_0x432351) {
          return void publicClient.toastMsgPlug("叠加券需和话费券叠加使用", 2000);
        }
      }
    }
    $(".coupon-main-yn").attr("choosedstr", _0x41a07a);
    _0x1a53d0 = false;
    _0x26a397();
    _0x8c9bd2();
  }
  function _0x4caf29(_0x1360a6) {
    var _0x432351 = "";
    var _0xb3954d = 1;
    var _0x5ce772 = [];
    _0x5ce772 = _0x29c538();
    var _0x13ad6e = _0x57b50c(_0x5ce772);
    _0x1360a6.pCardNo = "";
    _0x13ad6e[0] && (_0x1360a6.operateId = _0x13ad6e[0].operateId, "coupon" == _0x13ad6e[0].type && (_0x1360a6.pCardNo = _0x13ad6e[0].pcardNo));
    for (var _0x57ee71 = 1; _0x57ee71 < _0x13ad6e.length; _0x57ee71++) {
      _0x432351 += "cardNo" + _0xb3954d + "=" + _0x13ad6e[_0x57ee71].pcardNo + ",";
      _0x432351 += "coupon" + _0xb3954d + "=" + _0x13ad6e[_0x57ee71].operateId + ",";
      _0xb3954d++;
    }
    var _0x112757 = "";
    _0x112757 = _0x432351.slice(0, _0x432351.length - 1);
    _0x1360a6.couponExp = _0x112757;
  }
  function _0x438610(_0x1360a6, _0x432351, _0xb3954d) {
    var _0x5ce772 = {
      p: _0x432351,
      a: _0xb3954d
    };
    if ("rule" == _0x1360a6.type) {
      _0x1cbdea = _0x1360a6.operateId;
      _0x36f6ac = 0 != _0x1360a6.targetNoType;
      var _0x13ad6e = _0x3a91e4(Number(_0xec0045), Number(_0x1360a6.saleType), _0x1360a6, _0x1360a6.discountFormat || "");
      _0x5ce772.p = _0x13ad6e.pMon;
      _0x5ce772.a = _0x13ad6e.aMon;
      _0x26576b = "";
    } else {
      if ("coupon" == _0x1360a6.type) {
        _0x1cbdea = _0x1360a6.operateId;
        _0x26576b = _0x1360a6.pCardNo || _0x1360a6.pcardNo;
        var _0x13ad6e = _0x217c1a(Number(_0x432351), Number(_0xb3954d), _0x1360a6.saleType, _0x1360a6.discountFormat || 0, _0x1360a6.saleCode, _0x1360a6.capDiscount);
        _0x5ce772.p = _0x13ad6e.pMon;
        _0x5ce772.a = _0x13ad6e.aMon;
      }
    }
    _0x5bd53a = _0x5ce772.p;
    return _0x5ce772;
  }
  function _0x463dca(_0x1360a6, _0x432351) {
    if (_0x4441f9 && _0x4441f9.length > 0 || _0x5c0b1a && _0x5c0b1a.length > 0) {
      var _0xb3954d = _0x39e0f0();
      var _0x5ce772 = _0x3dbf2b();
      _0x38a94c.discountRules = _0xb3954d.ruleUse;
      _0x38a94c.discountNoRules = _0xb3954d.ruleNouse;
      _0x38a94c.discountCoupons = _0x5ce772.dataColor;
      _0x38a94c.discountNoCoupons = _0x5ce772.dataGray;
    }
    if (_0x56f2a8 && _0x56f2a8.length > 0) {
      var _0x13ad6e = _0x156486();
      _0x3de03c.maskBoxRules = _0x13ad6e.maskRuleUse;
      _0x3de03c.maskBoxNoRules = _0x13ad6e.maskRuleNouse;
      _0x3de03c.maskBlindRules = _0x56f2a8;
    }
    if (_0x2a2d34 && _0x2a2d34.length > 0) {
      var _0x57ee71 = _0x51c8f5();
      _0xe5922b.addtionBoxRules = _0x57ee71.addtionRuleUse;
      _0xe5922b.addtionBoxNoRules = _0x57ee71.addtionRuleNouse;
      _0xe5922b.addtionBlindRules = _0x2a2d34;
    }
    var _0x112757 = false;
    if (null != _0x3dfb3d && !_0x4c8354 && 0 != _0x4c8354) {
      for (var _0x4f7a33 = 0; _0x4f7a33 < _0x38a94c.discountCoupons.length; _0x4f7a33++) {
        if ((_0x38a94c.discountCoupons[_0x4f7a33].pCardNo || _0x38a94c.discountCoupons[_0x4f7a33].pcardNo) == _0x3dfb3d) {
          _0x4c8354 = _0x38a94c.discountRules.length;
          _0x112757 = true;
          break;
        }
      }
    }
    _0x38a94c.discountRules.length + _0x38a94c.discountCoupons.length >= 1 ? $(".youhui").removeClass("hidden") : $(".youhui").addClass("hidden");
    var _0x232a41;
    var _0xd89ed2;
    var _0x1509b2;
    if (_0x5a64ee.includes(_0x56d11a)) {
      var _0x27340f = $("#discountTpl_yn").html();
      if (juicer.register("getDateym", _0x105087), juicer.register("getCardType", _0x48fee0), juicer.register("getcouponValue", _0x4c1877), juicer.register("getTipInfo", _0x3ebfc4), _0xd89ed2 = _0x4edb27(), _0x38a94c.festYNids = [], null != _0xd89ed2) {
        if (_0xd89ed2.length > 0) {
          for (var _0xb9ded1 = 0; _0xb9ded1 < _0xd89ed2.length; _0xb9ded1++) {
            "rule" == _0xd89ed2[_0xb9ded1].type ? _0x38a94c.festYNids.push(_0xd89ed2[_0xb9ded1].operateId + "") : "coupon" == _0xd89ed2[_0xb9ded1].type && _0x38a94c.festYNids.push(_0xd89ed2[_0xb9ded1].pcardNo);
          }
          $(".cou-text").html("组合优惠");
        } else {
          "rule" == _0xd89ed2.type ? _0x38a94c.festYNids[0] = _0xd89ed2.operateId + "" : "coupon" == _0xd89ed2.type && (_0x38a94c.festYNids[0] = _0xd89ed2.pcardNo);
          $(".cou-text").html(_0xd89ed2.pcardName || _0xd89ed2.saleName);
        }
      } else {
        if (_0x38a94c.discountRules[0]) {
          _0x38a94c.festYNids[0] = _0x38a94c.discountRules[0].operateId + "";
        } else {
          for (var _0xb9ded1 = 0; _0xb9ded1 < _0x38a94c.discountCoupons.length; _0xb9ded1++) {
            "0" == _0x38a94c.discountCoupons[_0xb9ded1].canOlay && (_0x38a94c.festYNids[0] = _0x38a94c.discountCoupons[_0xb9ded1].pcardNo + "");
          }
        }
      }
      _0x38a94c.festYNids[0] = _0x112757 && _0x503a59 ? _0x3dfb3d : _0x38a94c.festYNids[0];
      _0xf07e2f = null != (_0xd89ed2 && _0xd89ed2[0] && _0xd89ed2[0].type) ? _0xd89ed2[0].type : null;
      _0x5ebec7 = null != (_0xd89ed2 && _0xd89ed2[0] && _0xd89ed2[0].index) ? _0xd89ed2[0].index : null;
      var _0x19c473 = juicer(_0x27340f, _0x38a94c);
      $(".coupon-list").html(_0x19c473);
    } else {
      var _0x27340f = $("#discountTpl").html();
      juicer.register("getDateym", _0x105087);
      juicer.register("getCardType", _0x48fee0);
      juicer.register("getcouponValue", _0x4c1877);
      juicer.register("getTipInfo", _0x3ebfc4);
      console.log("最优优惠--------");
      _0xd89ed2 = _0x4043fe(_0x38a94c.discountRules, _0x38a94c.discountCoupons, _0xec0045);
      _0x1509b2 = _0xd89ed2 && _0xd89ed2.saleData && _0xd89ed2.saleData.type;
      _0x232a41 = _0xd89ed2 && _0xd89ed2.saleData && _0xd89ed2.saleData.index;
      _0x38a94c.festType = _0x1509b2;
      _0x38a94c.festIndex = _0x232a41;
      var _0x19c473 = juicer(_0x27340f, _0x38a94c);
      $(".coupon-list").html(_0x19c473);
    }
    var _0x54c559 = 0;
    var _0x2812f9 = 0;
    var _0x230e88 = 1;
    if ($(".num-item").each(function (_0x1360a6) {
      $(this).hasClass("active") && (_0x54c559 = parseInt($(this).attr("posval") / 3), _0x2812f9 = $(this).attr("posval") % 3, _0x230e88 = $(this).attr("buryingval"));
    }), _0x546c96.productRules.length > 0) {
      if (_0x546c96.productUnitRules = _0x546c96.productRules.filter(function (_0x1360a6) {
        return "11" == _0x1360a6.saleType;
      }), (_0x546c96.productUnitRules || []).length > 0) {
        var _0x31c011 = $("#productRulTpl").html();
        var _0x5ce900 = _0x546c96.productUnitRules.filter(function (_0x1360a6) {
          return _0x1360a6.imageCode;
        }).length;
        var _0xc27415 = juicer(_0x31c011, {
          gearRules: _0x546c96.productUnitRules,
          arrowRules: [0, 1, 2],
          gearChoosedVal: _0x2812f9,
          gearRuleChecked: _0x31d566,
          totalRowNum: _0x5ce900,
          evestr: _0x26a064
        });
        $(".under-pay-rule-container").empty();
        $(".under-pay-rule-container").each(function (_0x1360a6) {
          $(this).attr("posinxval") == _0x54c559 && ($(this).html(_0xc27415), _0x1a9aa7(".under-pay-rule-container", _0x54c559, _0x230e88, _0x546c96.productUnitRules || []));
        });
      }
    } else {
      $(".under-pay-rule-container").empty();
      _0x18cd43 = "A";
      _0x31d566 = "-1";
    }
    var _0x5c4afb = $("#interestsTpl").html();
    var _0x878385 = juicer(_0x5c4afb, _0x264fbd);
    $(".interests-list").html(_0x878385);
    var _0x360af9 = $("#maskBoxTpl").html();
    var _0x1a2a73 = juicer(_0x360af9, _0x3de03c);
    var _0x34a6c0 = $("#addtionBoxTpl").html();
    var _0x1bcfcb = juicer(_0x34a6c0, _0xe5922b);
    undefined === _0x1360a6 && (_0x1360a6 = true);
    _0xfe06d3 && $(".addtion-box").html(_0x1bcfcb);
    _0x1360a6 && $(".mask-box").html(_0x1a2a73);
    _0xe5922b.addtionRights.length > 0 && $(".addtion-box").removeClass("hidden");
    _0x3de03c.maskRights.length > 0 && $(".mask-box").removeClass("hidden");
    publicClient.versions.ios || $(".discount-main-title-sign").addClass("discount-main-title-signAndrod");
    sessionStorage.getItem("choose_money") != _0xec0045 && (_0x41a07a = [], sessionStorage.setItem("choose_money", _0xec0045));
    var _0x13a4a1 = _0xec0045;
    var _0x1ad579 = _0xec0045;
    _0x5bd53a = _0x13a4a1;
    var _0x369a4a = "";
    if ("rule" == _0xf07e2f) {
      _0x369a4a = _0x22cd18(_0x4441f9[_0x5ebec7].operateId, _0x38a94c.discountRules);
      _0x369a4a.selectFlag ? _0x4c8354 = _0x369a4a.selectIndex : _0x5ebec7 = _0x4c8354 = _0xf07e2f = null;
    } else {
      if ("coupon" == _0xf07e2f) {
        var _0x2750ba = _0x5c0b1a[_0x5ebec7].operateId;
        var _0x3312cc = _0x5c0b1a[_0x5ebec7].pcardNo;
        _0x369a4a = _0x1cdea3(_0x2750ba, _0x38a94c.discountCoupons, _0x3312cc);
        _0x369a4a.selectFlag ? _0x4c8354 = _0x38a94c.discountRules.length + _0x369a4a.selectIndex : _0x5ebec7 = _0x4c8354 = _0xf07e2f = null;
      }
    }
    if (_0x3ef60e && _0x3de03c.maskBoxRules.length > 0 ? $(".option").addClass("active") : (_0x3ef60e = false, $(".option").removeClass("active")), _0x219e0f ? ($(".addtion-box .img-item3").eq(0).addClass("current"), $(".addtionCheck").addClass("active"), $(".unit-order-product").removeClass("unit-order-product-active")) : (_0x219e0f = false, $(".addtionCheck").removeClass("active")), null == _0x5ebec7 && false !== _0x232a41 && (_0xd89ed2 && 1 == _0xd89ed2.choosing ? (_0xf07e2f = _0x1509b2, _0x5ebec7 = _0x232a41, _0x4c8354 = _0xd89ed2 && _0xd89ed2.checkInx) : _0xd89ed2 && _0xd89ed2.choosing > 1 && (_0xf07e2f = _0xd89ed2 && _0xd89ed2.mostObj && _0xd89ed2.mostObj.saleData && _0xd89ed2.mostObj.saleData.type, _0x5ebec7 = _0xd89ed2 && _0xd89ed2.mostObj && _0xd89ed2.mostObj.saleData && _0xd89ed2.mostObj.saleData.index, _0x4c8354 = _0xd89ed2 && _0xd89ed2.mostObj && _0xd89ed2.mostObj.checkInx)), _0x5a64ee.includes(_0x56d11a)) {
      if (_0x1a53d0 && (_0x2de7bb && !_0x432351 || (_0x41a07a = _0x38a94c.festYNids, $(".coupon-main-yn").attr("choosedstr", _0x41a07a))), _0x389e04(), _0x41a07a.length > 1) {
        $(".cou-text").html("组合优惠");
      } else {
        if (1 == _0x41a07a.length) {
          for (var _0x10f733 = "", _0xb9ded1 = 0; _0xb9ded1 < _0x38a94c.discountRules.length; _0xb9ded1++) {
            if (_0x41a07a[0] == _0x38a94c.discountRules[_0xb9ded1].operateId) {
              _0x10f733 = _0x38a94c.discountRules[_0xb9ded1].saleName;
              break;
            }
          }
          for (var _0xb9ded1 = 0; _0xb9ded1 < _0x38a94c.discountCoupons.length; _0xb9ded1++) {
            if (_0x41a07a[0] == _0x38a94c.discountCoupons[_0xb9ded1].pcardNo) {
              _0x10f733 = _0x38a94c.discountCoupons[_0xb9ded1].pcardName;
              break;
            }
          }
          $(".cou-text").html(_0x10f733);
        }
      }
    } else {
      _0x5ebec7 || 0 == _0x5ebec7 ? "rule" == _0xf07e2f ? ($(".cou-text").html(_0x4441f9[_0x5ebec7].saleName), $(".coupon-net").remove("no-right")) : "coupon" == _0xf07e2f && ($(".cou-text").html(_0x54a254(_0x5c0b1a[_0x5ebec7])), $(".coupon-net").remove("no-right")) : _0x38a94c.discountRules.length > 0 ? (_0x4c8354 = 0, _0xf07e2f = "rule", _0x5ebec7 = $(".discount-item").eq(0).attr("index"), $(".cou-text").html(_0x4441f9[_0x5ebec7].saleName)) : _0x38a94c.discountCoupons.length > 0 ? (_0x4c8354 = 0, _0xf07e2f = "coupon", _0x5ebec7 = $(".discount-item").eq(0).attr("index"), $(".cou-text").html(_0x54a254(_0x5c0b1a[_0x5ebec7]))) : (_0x5ebec7 = _0x4c8354 = _0xf07e2f = null, _0x26576b = "", _0x1cbdea = "", $(".cou-text").html("无可用").removeClass("blue"), $(".coupon-net").addClass("no-right"));
    }
    if (_0x5a64ee.includes(_0x56d11a)) {
      for (var _0xb9ded1 = 0; _0xb9ded1 < _0x41a07a.length; _0xb9ded1++) {
        $(".coupon-main-yn li").each(function () {
          $(this).attr("id") == _0x41a07a[_0xb9ded1] && ($(this).addClass("discount-itemActive"), $(this).addClass(_0x41a07a[_0xb9ded1]));
        });
      }
      var _0x5537c5 = [];
      _0x5537c5 = _0x29c538();
      var _0x34b552 = _0x57b50c(_0x5537c5);
      _0x1cbdea = "";
      for (var _0xb9ded1 = 0; _0xb9ded1 < _0x34b552.length; _0xb9ded1++) {
        var _0x540d2e = _0x438610(_0x34b552[_0xb9ded1], _0x13a4a1, _0x1ad579);
        _0x13a4a1 = _0x540d2e.p;
        _0x1ad579 = _0x540d2e.a;
      }
      !$(".benefit-item >.coupon").hasClass("active") && _0x34b552.length > 0 && $(".benefit-item >.coupon").addClass("active");
      _0x490586(_0x13a4a1, function (_0x1360a6) {
        _0x13a4a1 = _0x1360a6;
        _0x5bd53a = _0x13a4a1;
      });
      _0x36acae(_0x13a4a1, _0x34b552[0] || {});
      _0x56b31e(_0x34b552[0]);
      _0x29e23f();
    } else {
      if (null != _0x5ebec7) {
        if (null != _0x4c8354 && $(".discount-item").removeClass("discount-itemActive").eq(Number(_0x4c8354)).addClass("discount-itemActive"), "rule" == _0xf07e2f) {
          var _0x37f002 = _0x4441f9[_0x5ebec7];
          _0x1cbdea = _0x37f002.operateId;
          _0x36f6ac = 0 != _0x37f002.targetNoType;
          var _0x655f91 = _0x3a91e4(Number(_0xec0045), Number(_0x37f002.saleType), _0x37f002, _0x37f002.discountFormat || "");
          _0x13a4a1 = _0x655f91.pMon;
          _0x1ad579 = _0x655f91.aMon;
          _0x26576b = "";
        } else {
          if ("coupon" == _0xf07e2f) {
            var _0x37f002 = _0x5c0b1a[_0x5ebec7];
            _0x1cbdea = _0x37f002.operateId;
            _0x26576b = _0x37f002.pCardNo || _0x37f002.pcardNo;
            var _0x655f91 = _0x217c1a(Number(_0xec0045), Number(_0xec0045), _0x37f002.saleType, _0x37f002.discountFormat || 0, _0x37f002.saleCode, _0x37f002.capDiscount);
            _0x13a4a1 = _0x655f91.pMon;
            _0x1ad579 = _0x655f91.aMon;
          }
        }
        _0x5bd53a = _0x13a4a1;
        (!_0x27ccc2 && 0 != _0x27ccc2 || !_0x3c031b && 0 != _0x3c031b) && _0x29e23f();
      } else {
        _0x29e23f();
      }
    }
    if (_0x3ef60e && _0x3de03c.maskBoxRules.length > 0) {
      var _0x26a397 = _0x3de03c.maskBoxRules && _0x3de03c.maskBoxRules[0] && _0x3de03c.maskBoxRules[0].price || 0;
      _0x4a8f3e = _0x56f2a8[0].operateId;
      _0x5d37ac = Number(_0x26a397);
      _0x3c3c8b = "8";
      _0x13a4a1 = _0x10f63a(Number(_0xec0045), Number(_0x13a4a1), _0x3de03c.maskBoxRules[0]);
    }
    if (_0x3ef60e && $(".recharge-arrival").html("到账金额" + publicClient.floating(_0x1ad579) + "元和一次拆盲盒权益机会"), 0 == _0xec0045 || null == _0x2225e4 ? _0x3654e7() : _0x1286c9 && _0x573a02(), $("#payMoney").html(publicClient.floating(_0x13a4a1)), $("#amoMoney").html(publicClient.floating(_0x1ad579)), _0x219e0f && _0xe5922b.addtionBoxRules.length > 0) {
      $("#payMoney").html(publicClient.floating(Number(_0x5bd53a) + Number(_0x38715f.price)));
      $(".buttonShowAddText").removeClass("hidden");
      $("#buttonShowAddText").html("到账金额" + _0x1ad579 + "元和您选购的权益");
    } else {
      if ("-1" != _0x31d566) {
        var _0x403563 = _0x110885[_0x31d566] || {};
        _0x4a8f3e = _0x403563.operateId;
        _0x5d37ac = _0x403563.price;
        _0x3c3c8b = "7";
        "8" == _0x403563.activityType && (_0x3c3c8b = "6");
        $("#payMoney").html(publicClient.floating(Number(_0x5bd53a) + Number(_0x403563.price || 0)));
        $(".buttonShowAddText").removeClass("hidden");
        $("#buttonShowAddText").html("到账金额" + _0x1ad579 + "元和" + _0x403563.saleName);
      } else {
        _0x20d200 ? (_0x3c3c8b = "5", _0x4a8f3e = _0x269b4b[0].operateId, _0x5d37ac = 0, $(".buttonShowAddText").removeClass("hidden"), $("#buttonShowAddText").html("到账金额" + _0x1ad579 + "元和" + _0x269b4b[0].saleName)) : $(".buttonShowAddText").addClass("hidden");
      }
    }
    if (_0x4c8354 == (_0xd89ed2 && _0xd89ed2.checkInx) ? $(".youhui").removeClass("youhui-normal").addClass("youhui-default") : $(".youhui").removeClass("youhui-default").addClass("youhui-normal"), _0x38a94c.festYNids.length == _0x41a07a.length) {
      for (var _0x372f21 = false, _0xb9ded1 = 0; _0xb9ded1 < _0x38a94c.festYNids.length; _0xb9ded1++) {
        _0x41a07a.includes(_0x38a94c.festYNids[_0xb9ded1]) || (_0x372f21 = true);
      }
      _0x372f21 ? $(".youhui").removeClass("youhui-default").addClass("youhui-normal") : $(".youhui").removeClass("youhui-normal").addClass("youhui-default");
    } else {
      $(".youhui").removeClass("youhui-default").addClass("youhui-normal");
    }
    _0x2b1164 && _0x2b1164 == _0x2225e4 && _0x1a1e8b && (_0x23e0cd(), _0x1a1e8b = false);
  }
  function _0x324c2c(_0x1360a6) {
    _0x5a64ee.includes(_0x56d11a) ? _0x52a294($(_0x1360a6).attr("id"), $(_0x1360a6)) : _0x26a397();
  }
  function _0x52c404() {
    document.hidden || (_0x12ce25(), document.removeEventListener("visibilitychange", _0x52c404, true));
  }
  function _0x270ced() {
    publicClient.showLoadPlug();
    var _0x1360a6 = [{
      WT_et: "imp",
      WT_area_type_1: "弹窗",
      WT_area_type_2: "APP充值中心弹窗",
      WT_area_name: "",
      XY_env_type: "",
      WT_event: "",
      WT_envName: "弹出",
      XY_gd_source: "qqd",
      WT_markId: ""
    }, {
      WT_et: "clk",
      WT_area_type_1: "弹窗",
      WT_area_type_2: "APP充值中心弹窗",
      WT_area_name: "",
      XY_env_type: "",
      WT_event: "",
      WT_envName: "关闭",
      XY_gd_source: "qqd",
      WT_markId: ""
    }, {
      WT_et: "clk",
      WT_area_type_1: "弹窗",
      WT_area_type_2: "APP充值中心弹窗",
      WT_area_name: "",
      XY_env_type: "pic",
      WT_event: "",
      WT_envName: "图片点击",
      XY_gd_source: "qqd",
      WT_markId: ""
    }, {
      WT_et: "imp",
      WT_area_type_1: "弹窗",
      WT_area_type_2: "APP充值中心弹窗",
      WT_area_name: "云机充值中心温馨提示弹窗",
      XY_env_type: "",
      WT_event: "",
      WT_envName: "弹出",
      XY_gd_source: "",
      WT_markId: ""
    }, {
      WT_et: "clk",
      WT_area_type_1: "弹窗",
      WT_area_type_2: "APP充值中心弹窗",
      WT_area_name: "云机充值中心温馨提示弹窗",
      XY_env_type: "button",
      WT_event: "",
      WT_envName: "我知道了",
      XY_gd_source: "",
      WT_markId: ""
    }];
    $(".cloud-mobile-pop").off("fastClick", ".pop-close").on("fastClick", ".pop-close", function () {
      $(".cloud-mobile-pop").addClass("hidden");
      publicClient.setGdpTrace({}, _0x1360a6[1].WT_et, _0x1360a6[1]);
    });
    recharge_H5module_inner.getAccuratePopupCon({
      type: "post",
      noEncrypt: true,
      userInfo: _0x26ca50,
      reqBody: {
        cellNum: _0x2b1164,
        provinceCode: _0x26ca50.loginProvince,
        cityCode: _0x26ca50.loginCity,
        cv: _0x26ca50.version,
        st: _0x26ca50.st,
        pageCode: "0"
      },
      dataType: "json",
      time: 2000,
      success: function (_0x432351) {
        if (publicClient.closeLoadPlug(), "000000" == _0x432351.retCode) {
          var _0xb3954d;
          var _0x5ce772;
          var _0x13ad6e = _0x432351.data && _0x432351.data.areaList || [];
          _0x13ad6e.map(function (_0x432351) {
            "20240723004" == _0x432351.areaId && (_0x432351.moduleList || []).map(function (_0x432351) {
              if ("czzx-tc-001" == _0x432351.moduleId) {
                var _0x13ad6e = _0x432351.adverList && _0x432351.adverList[0] && _0x432351.adverList[0].imageUrl;
                var _0x57ee71 = _0x432351.adverList && _0x432351.adverList[0] && _0x432351.adverList[0].linkUrl;
                _0x1360a6[0].WT_markId = _0x432351.adverList && _0x432351.adverList[0] && _0x432351.adverList[0].markId;
                _0x1360a6[1].WT_markId = _0x1360a6[0].WT_markId;
                _0x1360a6[2].WT_markId = _0x1360a6[0].WT_markId;
                _0x1360a6[0].WT_area_name = _0x432351.adverList && _0x432351.adverList[0] && _0x432351.adverList[0].activityName;
                _0x1360a6[1].WT_area_name = _0x1360a6[0].WT_area_name;
                _0x1360a6[2].WT_area_name = _0x1360a6[0].WT_area_name;
                _0x1360a6[0].WT_event = _0x432351.adverList && _0x432351.adverList[0] && _0x432351.adverList[0].channelId;
                _0x1360a6[2].WT_event = _0x1360a6[0].WT_event;
                !_0xb3954d && !_0x5ce772 && _0x13ad6e && _0x57ee71 && (_0xb3954d = _0x13ad6e, _0x5ce772 = _0x57ee71, _0x1360a6[2].WT_next_url = _0x5ce772);
              }
            });
          });
          _0xb3954d && _0x5ce772 ? ($(".cloud-mobile-pop").removeClass("hidden"), $(".pop-image-container > .pop-image").css({
            "background-image": "url(" + _0xb3954d + ")"
          }), $(".cloud-mobile-pop").off("fastClick", ".pop-image").on("fastClick", ".pop-image", function () {
            $(".cloud-mobile-pop").addClass("hidden");
            publicClient.setGdpTrace({}, _0x1360a6[2].WT_et, _0x1360a6[2]);
            _0x4b93d3(_0x5ce772);
          }), publicClient.setGdpTrace({}, _0x1360a6[0].WT_et, _0x1360a6[0])) : _0x9f3757 && (publicClient.setGdpTrace({}, _0x1360a6[3].WT_et, _0x1360a6[3]), _0x545979("温馨提示", "尊敬的用户，获取更好的支付体验，请下载中国移动APP后使用，感谢您的理解。", "我知道了", function () {
            publicClient.setGdpTrace({}, _0x1360a6[4].WT_et, _0x1360a6[4]);
          }));
        } else {
          _0x9f3757 && (publicClient.setGdpTrace({}, _0x1360a6[3].WT_et, _0x1360a6[3]), _0x545979("温馨提示", "尊敬的用户，获取更好的支付体验，请下载中国移动APP后使用，感谢您的理解。", "我知道了", function () {
            publicClient.setGdpTrace({}, _0x1360a6[4].WT_et, _0x1360a6[4]);
          }));
        }
      },
      error: function () {
        _0x9f3757 && (publicClient.setGdpTrace({}, _0x1360a6[3].WT_et, _0x1360a6[3]), _0x545979("温馨提示", "尊敬的用户，获取更好的支付体验，请下载中国移动APP后使用，感谢您的理解。", "我知道了", function () {
          publicClient.setGdpTrace({}, _0x1360a6[4].WT_et, _0x1360a6[4]);
        }));
      }
    });
  }
  function _0x545979(_0x1360a6, _0x432351, _0xb3954d, _0x5ce772) {
    if (undefined === $(".dialog-plug").attr("id") || undefined == $(".dialog-plug").attr("id")) {
      var _0x13ad6e = "<div class='dialog-plug' id='dialog-plug'><div class='d-wrap'><div class='d-lay'><div class='d-con' style='padding-bottom:0.1rem;'><p class='d-tit'>" + _0x1360a6 + "</p><p class='d-tex' style='line-height:24px;'>" + _0x432351 + "</p><p class='d-btn-plus'>" + _0xb3954d + "</p></div></div></div></div>";
      $("body").append(_0x13ad6e);
      $(".dialog-plug .d-btn-plus").unbind();
      $(".dialog-plug .d-btn-plus").fastClick(function (_0x1360a6) {
        $(".dialog-plug").remove();
        _0x1360a6.preventDefault();
        "function" == typeof _0x5ce772 && _0x5ce772();
      });
    } else {
      $(".dialog-plug .d-tex").html(_0x432351);
      $(".dialog-plug .d-btn").html(_0xb3954d);
    }
  }
  function _0x1cbcb6(_0x1360a6) {
    for (var _0x432351 = false, _0xb3954d = document.cookie.split("; "), _0x5ce772 = 0; _0x5ce772 < _0xb3954d.length; _0x5ce772++) {
      if (_0xb3954d[_0x5ce772].split("=")[0] == _0x1360a6) {
        _0x432351 = true;
        break;
      }
    }
    return _0x432351;
  }
  function _0x187878(_0x1360a6) {
    if (_0x878385(_0x26ca50.version, [9, 0, 5]) && !_0x26f891) {
      _0x240535(_0x1360a6);
    } else {
      try {
        $.getScript("../../js/public/index-private-web.js", function () {
          _0x501d2f(_0x1360a6);
        });
      } catch (_0x5559c2) {
        "function" == typeof _0x1360a6 && _0x1360a6();
      }
    }
  }
  function _0x240535(_0x1360a6) {
    _0x1cbcb6("stc-rrt-token") ? "function" == typeof _0x1360a6 && _0x1360a6() : cmcc.getRiskLevel && cmcc.getRiskLevel({
      debug: false,
      success: function (_0x432351) {
        var _0xb3954d = _0x432351.devToken;
        var _0x5ce772 = new Date();
        _0x5ce772.setTime(_0x5ce772.getTime() + 1200000);
        (_0xb3954d || "").length < 100 && (document.cookie = "stc-rrt-token=" + _0xb3954d + ";expires=" + _0x5ce772.toUTCString() + ";path=/i;secure=true");
        "function" == typeof _0x1360a6 && _0x1360a6();
      },
      error: function () {
        _0x501d2f(_0x1360a6);
      }
    });
  }
  function _0x18c9a0() {
    try {
      cmcc.quitLogin({
        success: function () {
          cmcc.showLogin();
        }
      });
    } catch (_0xb9a7b) {}
  }
  function _0x501d2f(_0x1360a6) {
    var _0x432351 = {
      appId: "e1f92650d20263d38dbe327e7237f516",
      server: "https://yxfk.market.chinamobile.com:8081/mgt/decision-engine/udid/c1",
      timeout: 500
    };
    if (_0x1cbcb6("stc-rrt-token")) {
      "function" == typeof _0x1360a6 && _0x1360a6();
    } else {
      try {
        _zw.ConstID(_0x432351, function (_0x432351, _0xb3954d) {
          if (_0x432351) {
            return void ("function" == typeof _0x1360a6 && _0x1360a6());
          }
          var _0x5ce772 = new Date();
          _0x5ce772.setTime(_0x5ce772.getTime() + 1200000);
          (_0xb3954d || "").length < 100 && (document.cookie = "stc-rrt-token=" + _0xb3954d + ";expires=" + _0x5ce772.toUTCString() + ";path=/i;secure=true");
          "function" == typeof _0x1360a6 && _0x1360a6();
        });
      } catch (_0xb89ab0) {
        "function" == typeof _0x1360a6 && _0x1360a6();
      }
    }
  }
  var _0x56d11a;
  var _0x492738;
  var _0x1cbdea;
  var _0x26ca50 = {};
  var _0x1adc30 = navigator.userAgent.toLowerCase();
  var _0x26f891 = _0x1adc30.indexOf("harmony") > -1 && _0x1adc30.indexOf("arkweb") > -1;
  var _0x2b1164 = "";
  var _0x2225e4 = null;
  var _0x49371d = "";
  var _0x52e966 = "";
  var _0xec0045 = 100;
  var _0x503a59 = true;
  var _0x813e0d = "";
  var _0x4441f9 = [];
  var _0x3975a2 = 1000;
  var _0x4cf058 = 10;
  var _0x5ebec7 = null;
  var _0xf07e2f = null;
  var _0x4c8354 = null;
  var _0x5c0b1a = [];
  var _0x9147b6 = null;
  var _0x26576b = null;
  var _0x3dfb3d = null;
  var _0x3936d4 = null;
  var _0x48ff75 = null;
  var _0x10547f = 0;
  var _0x59d530 = null;
  var _0x1e74b6 = null;
  var _0x194e01 = null;
  var _0x3c9259 = "";
  var _0x244a61 = "";
  var _0x1546ea = false;
  var _0x1a1e8b = true;
  var _0x2d1915 = false;
  var _0x2a2c6f = "";
  var _0x3d9080 = "";
  var _0x36f6ac = false;
  var _0x30f95a = {
    list: []
  };
  var _0x5cb4b6 = {
    lili: []
  };
  var _0x5d614c = [];
  var _0x3abc5d = 0;
  var _0x5e9139 = {
    10: 1,
    20: 2,
    30: 3,
    50: 4,
    100: 5,
    200: 6
  };
  var _0x316195 = 0;
  var _0x5e1d04 = "0";
  var _0x14fb03 = 6;
  var _0x4270f6 = "0";
  var _0x9f3757 = 0;
  var _0x174bb0 = $(_0x1360a6).height();
  var _0x38a94c = {
    discountRules: [],
    discountCoupons: [],
    discountNoRules: [],
    discountNoCoupons: [],
    discountYN: [],
    festYNids: [],
    hascanOlay: false,
    hasCoupons: false,
    festType: "",
    festIndex: ""
  };
  var _0x46e386 = null;
  var _0x3d0c6d = false;
  var _0xe3a961 = [];
  var _0x56f2a8 = [];
  var _0x2a2d34 = [];
  var _0x4188e2 = 6;
  var _0x3de03c = {
    maskBoxRules: [],
    maskBoxNoRules: [],
    maskRights: [],
    maskBlindRules: [],
    maskEnurl: "i",
    maskOrderStatue: null,
    blindOrderInfo: {}
  };
  var _0xe5922b = {
    addtionBoxRules: [],
    addtionBoxNoRules: [],
    addtionRights: [],
    addtionBlindRules: [],
    addtionEnurl: "i",
    addtionOrderStatue: null,
    addtionOrderInfo: {}
  };
  var _0xfe06d3 = false;
  var _0x2d4989 = 0;
  var _0x3624b4 = [0, 0, 0, 0, 0, 0, 0, 0];
  var _0x20d200 = false;
  var _0x4bf490 = 0;
  var _0x219e0f = false;
  var _0x3ef60e = false;
  var _0x38715f = {};
  var _0x17904f = "";
  var _0x5ee3f5 = "";
  var _0x269b4b = [];
  var _0x264fbd = {
    interestsRules: [],
    interestsNoRules: []
  };
  var _0x27ccc2 = null;
  var _0x2c5ef3 = null;
  var _0x3c031b = null;
  var _0x4a8f3e = "";
  var _0x5d37ac = "";
  var _0x3c3c8b = "";
  var _0x5bd53a = "";
  var _0x1286c9 = true;
  var _0x515ffc = "0";
  var _0x80745a = "";
  var _0x44cbe1 = null;
  var _0x493404 = null;
  var _0x3e5545 = "";
  var _0x361c0c = "";
  var _0x2b69bf = 60;
  var _0x5c9b6c = null;
  var _0x19c413 = null;
  var _0x5e83b8 = "";
  var _0x5a64ee = ["871"];
  var _0x24c053 = [{}, {}];
  var _0x41a07a = [];
  var _0x1a53d0 = true;
  var _0x18cd43 = "-1";
  var _0x2de7bb = false;
  var _0x247bbf = -1;
  var _0x93b9bd = null;
  var _0x1e2cbe = [];
  var _0x35e905 = false;
  var _0x2d1286 = "canAddPoint";
  var _0x2793e3 = {
    jfImpFloor: [0, 0, 0, 0, 0, 0, 0, 0]
  };
  var _0x5906db = 0;
  var _0x5b9488 = 0;
  var _0xae0d2d = "1";
  var _0x110885 = [];
  var _0x31d566 = "-1";
  var _0x31c8fb = "<span class=\"money-input-edit\"></span>";
  var _0x546c96 = {
    productRules: [],
    productNoRules: [],
    productUnitRules: [],
    canUsePoint: [],
    userTotalPoint: 0,
    pointDesc: ""
  };
  var _0x26a064 = "i";
  _0x1360a6.location.href.indexOf("gray") > -1 && (_0x26a064 = "i/gray");
  var _0x544b8a = ["200", "871", "230", "771", "931", "591"];
  var _0x3b1770 = "hebaoPay";
  var _0x5c2cf1 = function (_0x1360a6) {
    var _0x432351 = {
      operateCorner: (_0x1360a6.data && _0x1360a6.data.specialOfferZone || []).slice(0, 3)
    };
    var _0xb3954d = $("#specialAreaTpl").html();
    var _0x5ce772 = juicer(_0xb3954d, _0x432351);
    _0x1360a6.data && _0x1360a6.data.provinceSpecialOffer && "1" == _0x1360a6.data.provinceSpecialOffer ? ($("#special-areaBottom").removeClass("hidden"), $("#special-areaBottom").html(_0x5ce772)) : $("#special-areaTop").html(_0x5ce772);
    var _0x13ad6e = {
      type: "once"
    };
    var _0x57ee71 = {
      0: "P00000062035",
      1: "P00000062036",
      2: "P00000062037"
    };
    _0x432351.operateCorner.forEach(function (_0x1360a6, _0x432351) {
      _0x13ad6e[_0x57ee71[_0x432351]] = JSON.stringify({
        WT_et: "imp",
        type: "once",
        XY_env_type: "icon",
        WT_event: _0x57ee71[_0x432351],
        WT_envName: _0x1360a6.name
      });
    });
    _0x13ad6e.WT_area_type_1 = "楼层";
    _0x13ad6e.WT_area_name = "特惠专区";
    publicClient.setGdpTrace({}, "imp", _0x13ad6e);
  };
  var _0x275134 = function (_0x1360a6, _0x432351) {
    var _0xb3954d = {
      data: _0x1360a6,
      Money: _0x432351
    };
    var _0x5ce772 = $("#AiEntranceTpl").html();
    var _0x13ad6e = juicer(_0x5ce772, _0xb3954d);
    $("#AiEntrance").html(_0x13ad6e);
    document.getElementById("AiEntrance").style.setProperty("--steps", 11);
    publicClient.setGdpTrace({}, "imp", {
      WT_et: "imp",
      WT_area_type_1: "浮条",
      WT_area_name: "灵犀入口长浮条",
      WT_envName: "弹出"
    });
  };
  var _0x34129f = function () {
    var _0x1360a6 = _0x24c053 && _0x24c053.filter(function (_0x1360a6) {
      return 0 != Object.keys(_0x1360a6).length;
    });
    var _0x432351 = {
      0: "P00000051696",
      1: "P00000051697"
    };
    _0x1360a6.map(function (_0x1360a6, _0xb3954d) {
      0 == _0xb3954d ? $("#operation0 > .num-item-img").css({
        "background-image": "url(\"../../images/recharge/num-imgbannero.webp\")"
      }) : 1 == _0xb3954d ? $("#operation1 > .num-item-img").css({
        "background-image": "url(\"../../images/recharge/num-imgbannert.webp\")"
      }) : $("#operation" + _0xb3954d + " > .num-item-img").css({
        "background-image": "url(\"../../images/recharge/num-img1.png\")"
      });
      $("#operation" + _0xb3954d + " > .num-item-img").html(_0x1360a6.name);
      $("#operation" + _0xb3954d + " > .num-item-img").attr("positiontype", _0x1360a6.gImage && _0x1360a6.gImage[0] && _0x1360a6.gImage[0].type);
      $("#operation" + _0xb3954d + " > .num-item-img").attr("positionno", _0x1360a6.gImage && _0x1360a6.gImage[0] && _0x1360a6.gImage[0].imageUrl);
      $("#operation" + _0xb3954d + " > span").html(_0x1360a6.jbText && _0x1360a6.jbText.substr(0, 8));
      $("#operation" + _0xb3954d).css({
        display: "block"
      });
      $("#operation" + _0xb3954d).hasClass("num-img1") || $("#operation" + _0xb3954d).addClass("num-img1");
      publicClient.setGdpTrace({}, "imp", {
        WT_area_name: "充话费",
        WT_event: _0x432351[_0xb3954d] || "",
        WT_area_type_1: "楼层",
        XY_env_type: "button",
        WT_envName: _0x1360a6.name
      });
    });
    0 == _0x1360a6.length && 7 == $(".noSelect").attr("posval") && ($("#operation0").removeClass("num-img1"), $("#operation0").css({
      display: "block"
    }));
    1 == _0x1360a6.length && 6 == $(".noSelect").attr("posval") && ($("#operation1").removeClass("num-img1"), $("#operation1").css({
      display: "block"
    }));
  };
  var _0x1101cd = function (_0x1360a6) {
    var _0x432351 = _0x2225e4 == _0x2b1164 && "571" == _0x26ca50.loginProvince;
    var _0xb3954d = {
      chargeCornerDbList: _0x1360a6,
      dynamicsCorner: _0x24c053,
      loginGearProv: _0x432351
    };
    var _0x5ce772 = $("#gearsTpl").html();
    var _0x13ad6e = juicer(_0x5ce772, _0xb3954d);
    var _0x57ee71 = _0x432351 ? "zj" : "all";
    $(".num-box").attr("data-province", _0x57ee71);
    $(".num-list").html(_0x13ad6e);
    _0x5d614c = _0x1360a6;
    var _0x112757 = _0x5d614c.filter(function (_0x1360a6) {
      return 1 == _0x1360a6.isInitialAmount;
    });
    _0x34129f();
    _0x2812f9(_0x56d11a);
    _0x112757.length < _0x14fb03 && (_0x3d0c6d = true);
  };
  var _0x2cbecf = function (_0x1360a6) {
    function _0x432351(_0x1360a6, _0x432351) {
      var _0xb3954d = _0x269b4b && _0x269b4b[0] && _0x269b4b[0].presentCode && _0x269b4b[0].presentCode.split("|");
      var _0x5ce772 = (_0x269b4b && _0x269b4b[0] && _0x269b4b[0].presentCode || "").split("|")[0] || "";
      _0x2d4989 += 1;
      _0x432351.unobserve(_0x1360a6);
      publicClient.setGdpTrace({}, "imp", {
        WT_envName: "卡片",
        WT_event: "P00000097482",
        WT_si_n: _0x269b4b && _0x269b4b[0] && _0x269b4b[0].saleName || "",
        WT_si_x: "1",
        WT_goods_id: _0x5ce772,
        XY_sqb_group: _0xb3954d[1] || ""
      });
    }
    try {
      var _0xb3954d = new IntersectionObserver(function (_0x1360a6) {
        _0x1360a6.forEach(function (_0x1360a6) {
          _0x1360a6 && _0x1360a6.isIntersecting && _0x1360a6.target && _0x432351(_0x1360a6.target, _0xb3954d);
        });
      }, {
        root: null,
        threshold: [0],
        rootMargin: "-75px"
      });
      $(_0x1360a6).each(function (_0x1360a6, _0x432351) {
        _0x2d4989 < 1 && _0xb3954d.observe(_0x432351);
      });
    } catch (_0xcb25cf) {}
  };
  var _0x1a9aa7 = function (_0x1360a6, _0x432351, _0xb3954d, _0x5ce772) {
    function _0x13ad6e(_0x1360a6, _0x432351) {
      _0x432351.unobserve(_0x1360a6);
      var _0x13ad6e = "";
      $(".num-item").each(function (_0x1360a6, _0x432351) {
        $(_0x432351).attr("buryingval") == _0xb3954d && (_0x13ad6e = $(_0x432351).find(".money").attr("real-val") || "自定义");
      });
      var _0x57ee71 = {
        type: "once",
        area_id: "充值中心_搭售"
      };
      _0x5ce772 = _0x5ce772 || [];
      var _0x112757 = 59889;
      _0x5ce772.map(function (_0x1360a6) {
        var _0x432351 = "P000000" + _0x112757;
        _0x112757 += 1;
        _0x57ee71[_0x432351] = JSON.stringify({
          XY_env_type: "button",
          WT_event: "P00000059889",
          WT_envName: _0x1360a6.saleName,
          WT_next_url: "",
          WT_si_n: _0x1360a6.saleName,
          WT_si_x: "1",
          WT_goods_id: (_0x1360a6.presentCode || "").split("|")[0] || "",
          WT_sku_id: ""
        });
        _0x57ee71.WT_area_type_1 = "楼层";
        _0x57ee71.WT_area_name = "充值同定活动";
      });
      0 == _0x3624b4[_0xb3954d] && _0x5ce772.length > 0 && (publicClient.setGdpTrace({}, "imp", _0x57ee71), "自定义" != _0x13ad6e && (_0x3624b4[_0xb3954d] += 1));
    }
    try {
      var _0x57ee71 = new IntersectionObserver(function (_0x1360a6) {
        _0x1360a6.forEach(function (_0x1360a6) {
          _0x1360a6 && _0x1360a6.isIntersecting && _0x1360a6.target && _0x13ad6e(_0x1360a6.target, _0x57ee71);
        });
      }, {
        root: null,
        threshold: [0],
        rootMargin: "-75px"
      });
      $(_0x1360a6).each(function (_0x1360a6, _0x5ce772) {
        $(this).attr("posinxval") == _0x432351 && _0x3624b4[_0xb3954d] < 1 && _0x57ee71.observe(_0x5ce772);
      });
    } catch (_0x568500) {}
  };
  var _0x2d43c9 = function (_0x1360a6, _0x432351, _0xb3954d, _0x5ce772) {
    function _0x13ad6e(_0x1360a6, _0x13ad6e) {
      _0x2793e3[_0xb3954d][_0x5ce772] += 1;
      _0x13ad6e.unobserve(_0x1360a6);
      publicClient.setGdpTrace({}, "imp", _0x432351);
    }
    try {
      var _0x57ee71 = new IntersectionObserver(function (_0x1360a6) {
        _0x1360a6.forEach(function (_0x1360a6) {
          _0x1360a6 && _0x1360a6.isIntersecting && _0x1360a6.target && _0x13ad6e(_0x1360a6.target, _0x57ee71);
        });
      }, {
        root: null,
        threshold: [0],
        rootMargin: "-75px"
      });
      $(_0x1360a6).each(function (_0x1360a6, _0x432351) {
        _0x2793e3[_0xb3954d][_0x5ce772] < 1 && _0x57ee71.observe(_0x432351);
      });
    } catch (_0x3ce3df) {}
  };
  var _0x929439 = function (_0x1360a6) {
    try {
      _0x878385(_0x26ca50.version, [9, 9, 0]) && cmcc.getConcatenationInfo && cmcc.getConcatenationInfo({
        debug: false,
        success: function (_0x1360a6) {
          var _0x432351 = _0x1360a6.channelId;
          var _0xb3954d = _0x1360a6.yx;
          var _0x5ce772 = _0x1360a6.token;
          _0x49371d = _0x432351 + "_" + _0xb3954d;
          _0x52e966 = _0x5ce772;
        },
        error: function (_0x1360a6) {}
      });
      "100" != _0x1360a6 && cmcc.setNavigationFuncAtSecRightBtn({
        debug: false,
        funcName: "",
        secFuncName: "1",
        customServiceUrl: "https://wx.10086.cn/website/customerService/auth2/V6Bm3jkNKMI8KPPtca4aI9Nq6xBABmsk",
        success: function (_0x1360a6) {},
        error: function (_0x1360a6) {}
      });
    } catch (_0x2d971f) {
      console.log(_0x2d971f);
    }
  };
  cmcc.init = function () {
    _0x1360a6.location.href.indexOf("gray") > -1 && (_0x3de03c.maskEnurl = "i/gray", _0xe5922b.addtionEnurl = "i/gray");
    _0x12ce25();
    _0x1a054a();
  };
  setTimeout(function () {
    0 == _0x3abc5d && cmcc.init();
  }, 2500);
}(window);