function createAccount(){
    return `<div>
    <div class="bec">
                  <p class="rew">Become a Rewards Member</p>
                  <p class="eight">You’re one step away from free shipping on all orders<br> $50+, points on each purchase, and more!</p>
                  <a class="aatag" href="#">Use another email address</a>
              </div>
              <div class="inp">
                  <input type="text" placeholder="First and Last Name"><br>
                  <input type="text" placeholder="Create a Password">
              </div>
              <div class="pass">
                  
                  <div>
                    <p class="two">Your Password must include:</p>
                    <p class="two">8 to 24 characters</p>
                    <p class="two">A lowercase letter</p>
                    <p class="two">An uppercase letter</p>
                  </div>
                  <div class="three">
                      <p class="four">A number</p>
                      <p class="four">A special character</p>
                      <p class="four">- ! @ # $ % ^ & * ( ) _ +</p>
                  </div>
              </div>
              <div class="mob">
                  <input type="number" placeholder="Mobile Number">
                  <p class="five">Add phone number for easier rewards lookup in store</p>
                  <button >CREATE ACCOUNT</button>
                  <p class="six">By creating an account, you’re joining the Gap Inc. Rewards<br> Program and agree to the
                <a class="atag" href="#"> Terms & Conditions </a>and<a class="atag" href="#"> Privacy<br> Policy</a> of the Rewards program and consent to receive
                <br> marketing emails.</p>

              </div>
    </div>`
}

export default createAccount