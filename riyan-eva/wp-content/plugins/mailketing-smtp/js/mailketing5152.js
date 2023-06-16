jQuery("document").ready(function ($) {
  $("#mailketing-produk-aff").trigger("reset").hide();
  // Form submission listener
  $(".product_id_ml").change(function () {
    var product_id = $("#product_id").val();
    $.ajax({
      url: ajax_url, // Use our localized variable that holds the AJAX URL
      type: "POST", // Declare our ajax submission method ( GET or POST )
      data: {
        // This is our data object
        action: "check_mailketing_product", // AJAX POST Action
        product_id: product_id,
      },
    })
      .success(function (results) {
        var json = $.parseJSON(results);
        $("#mailketing-produk-aff").trigger("reset").hide();
        $("#aff_lead_prod option[value=" + json.product_lead + "]").attr("selected", true);
        $("#aff_purchase_prod option[value=" + json.product_purchase + "]").attr("selected", true);
        $("#mailketing-produk-aff").show();
      })
      .fail(function (data) {
        alert("Gagal");
      });
  });

  $("#aff_lead_prod").change(function () {
    var product_id = $("#product_id").val();
    var list_id = $("#aff_lead_prod").val();
    $.ajax({
      url: ajax_url, // Use our localized variable that holds the AJAX URL
      type: "POST", // Declare our ajax submission method ( GET or POST )
      data: {
        // This is our data object
        action: "update_lead_product", // AJAX POST Action
        product_id: product_id,
        list_id: list_id,
      },
    })
      .success(function (results) {
        alert("Sukses Integrasi lead");
      })
      .fail(function (data) {
        alert("Gagal");
      });
  });
  $("#aff_purchase_prod").change(function () {
    var product_id = $("#product_id").val();
    var list_id = $("#aff_purchase_prod").val();
    $.ajax({
      url: ajax_url, // Use our localized variable that holds the AJAX URL
      type: "POST", // Declare our ajax submission method ( GET or POST )
      data: {
        // This is our data object
        action: "update_purchase_product", // AJAX POST Action
        product_id: product_id,
        list_id: list_id,
      },
    })
      .success(function (results) {
        alert("Sukses Integrasi Purchase");
      })
      .fail(function (data) {
        alert("Gagal");
      });
  });

  $("#check_mailketing_aff").submit(function () {
    // Grab our post meta value
    var email = $("#email").val();
    var password = $("#password").val();
    $.ajax({
      url: ajax_url, // Use our localized variable that holds the AJAX URL
      type: "POST", // Declare our ajax submission method ( GET or POST )
      data: {
        // This is our data object
        action: "check_mailketing", // AJAX POST Action
        email: email,
        // Replace `um_key` with your user_meta key name
      },
    })
      .success(function (results) {
        window.location = window.location;
      })
      .fail(function (data) {
        alert("Gagal");
      });

    //return false;   // Stop our form from submitting
  });
});
