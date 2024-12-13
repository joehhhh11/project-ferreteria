const mercadopago = new MercadoPago('TEST-aa375513-7eca-4a4e-b44c-76da5de79161', {
    locale: 'es-AR',
  });
  
  document.getElementById("checkout-btn").addEventListener("click", function () {
    $('#checkout-btn').attr("disabled", true);
  
        const orderData = {
        quantity: document.getElementById("quantity").value,
        description: document.getElementById("product-description").innerHTML,
        price: document.getElementById("unit-price").innerHTML
        };
  
    fetch("http://localhost:8080/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (preference) {
        createCheckoutButton(preference.id);
  
        $(".shopping-cart").fadeOut(500);
        setTimeout(() => {
          $(".container_payment").show();  
        }, 500);
      })
      .catch(function () {
        alert("Unexpected error");
        $('#checkout-btn').attr("disabled", false);
      });
  });
  
  function createCheckoutButton(preferenceId) {
    const bricksBuilder = mercadopago.bricks();
  
    const renderComponent = async (bricksBuilder) => {
      if (window.checkoutButton) window.checkoutButton.unmount();
      await bricksBuilder.create(
        'wallet',
        'button-checkout', 
        {
          initialization: {
            preferenceId: preferenceId
          },
        }
      );
    };
    window.checkoutButton = renderComponent(bricksBuilder);
  }
  