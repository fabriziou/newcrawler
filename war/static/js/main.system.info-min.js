var systemInfo={v:{tableId:"systemInfoTable",webCrawlerId:null},fn:{detailInfo:function(){jsonrpc.systemService.info(function(a,b,c){removeLoading($("#"+systemInfo.v.tableId));$("#"+systemInfo.v.tableId).find(".detailInfo").html(a)},systemInfo.v.webCrawlerId)}}};