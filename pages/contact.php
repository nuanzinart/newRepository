

	<div id="map"></div>
    <div class="map-block" >
        <div class="container container-map" >

            <form class="contact-form" action="ajaxForm.php" method="POST">
                <div class="name-form">
                    Contact
                </div>
                
                <input type="name" name="name" placeholder="Your name" class="input-name">
                <input type="email" name="email" placeholder="Your email" class="input-email">
                <input type="number" name ="phone" placeholder="Phone" class="input-phone">
                <input type="text" name="message" class="area-word" placeholder="Message" class="input-message">
                <input type="hidden" name="opening-date" value="<?php echo date('Y-m-d H:i:s'); 

                ?> ">
                
                <input type="submit" name="submit" value="Send" class="submit_send">
                
<!--
                <div class="subBut">
                </div>
-->
            </form>
        </div>
    </div>

	