const transporter = require("./configs/mail");

const sendMail = async({from, to, subject, text, html}) =>{
    await transporter.sendMail({
        from,
        to,
        subject,
        text,
        html,
       
      });
};


const orderSuccess = async({from, to, users}) =>{
    await sendMail({
        from,
        to,
        subject: `Gap Order Success`,
        text: `Hi ${users.name}
                 Your Gap order has been placed successsfully.
                 Thank you for shoppping with us!`,
        html:`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEUAKl////8AAFEAIFoADlNteJLFydPk5+sABFEAJl3e4ecAAE8AI1tRYYPIzNUAG1gmP2yMlakAElUAFlYAHVkAEFT29/kACFKutcLO0toAFVYAC1IwRnC3vMhndJChqLgdOGiWnrDg4+i8wcxebIrt7/KCi6I6TnV8hp4VMWOSmq2nrr0AAEdYZoZDVXp1gJkAAEB/Dg8UAAAIi0lEQVR4nO2daXuqOhRGGbQasWKBqtShtVbt3PP/f91NhAwyZEdOuZLz7PWpVSlZAnlDBuo4CIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIJcHT/uzYfLKCHXLkg7jJdh/2MyGqXrw5vnn16K5r7JlsuMHvQ50qsgipPxX5bckPnxxhWM+gF1i3ajHwPFXprzoP8cOaaTEjfrj8O31zP6Jv8K4q1Pas+vm8cZ+2G/CYg3cO9CeNM3/r086c/u8a1bx2QTtOxIwkG2p8+EXovp6efU+TMzMZQFv4VOt9V0+vQjrN6mlNvH7Lf9i/c7KjV4maAbno7CMM336poY+n1eZvCUJoSE4tM3Q/orGUfhKPt9HfyGSQ3LRb6T+6wg8YwXw8AwvOMffoc/rHwfN3nNRLx99kLaniJZ5Tvd5Ach6V9g+PDBP7wAqhpG2dDxv/n2w+YOenq7fBcOryqGI3PD3k2pzBoqDJ2A7w28kJvS4zsVp4n/Ym445+VzRwbHoMow3OYvpS3VNkJnL3cQDIwNgz0v88zgQqoy9Df8NSBvmhLnFbY7kIa8+jAxdAUGh6DKUObNwaCuaoC4kBRDxzc1lIFvdAj0hiZ1VQPEhaQazlNDw/G3NDSoKfSGJnVVA7znCsPk1dBQFplGfgLuTG84aclwUGHoEENDGfhGkd8hw+zIwobxhzQ0uIw6ZJiVHDa830lDgwJ2yDBLSdiQ1lN8e5PI75ChE5sZ0nbzmhfQIPK7ZHh6GTakgf8ubkXgyO+SYbQ2MnRoSIjTdApGfpcMTzEAGrLA/0p5CeHI75Lhab+gIWs1T8WFCEd+lwydxMSQHWmPN93d7QVNoA4YBjMDQxabnwdeQjjyO2XIGt+gIQ38/fDFvISdMmSVKWhIv4bU4/087jMY+Z0yjLcGhjTwd72IlxCO/E4Zshso0JAG/mMcmEd+pwzHXwaG9CbrkHjmkd8pQ9aNChmywN/4SxH5X1Dkd8qQBSJkyAL/SCIR+a9Q5HfLMIANExr4oezwhCO/Y4bw2BPriQx4pw5lEQE765jhHjSMdmwrVidlpFARu2XowYYs8JcOmfIiPkNx0S3DeJ32gSFBFvj0xJzzIoKR3y1DJwbH10+BnzXSM5bABh0zhBmzwFdG49wVEPm2GZKj677Q49yb8DJCkW+bYRb4jvOw4GWEIt82w+TAAp/e6b/zMm5j/Ra2GWaBT8st5pCsgci3zTALfLWMKVCZ2ma4TDMlOUwKRb5thnTT7LT0eBmhyLfNMA98dboC0Ntmm2GSBb465QSIfMsMeeCr04Ze9A09ywzZGOPxdMzkSDAQ+ZYZhnngq6P5QORbZsgDXy04EPmWGUZrvo2cVQNEvmWGPPAdPjkF/iOWGYrAV2a3AZFvmaEI/FN3Ro6+Z8cyw5gHvpgH50KRb5ch6/bnAR+JiUP6yAdm7t1fXnwDCoZxUKKmZ4IFPj9iYpKqOKo122gNP4D754acG8YLd1agrvMlOcirLhEj3Y/aUlbOERZjyFDnZUOKhpkVR2NIj5uoOeVMZn3kV87zFg2idi7DyrNUxNvoT/1ZKgM/a4Rn6CO/cq4+r6Ue25kiXFXTyG563WQ8JfCzuSmFv1JFheGYTwOYtXQImxsqga9OaNdGftnQn/MoXbW13KKxYTBzt0GY8ylGuk3r0s+Ich9854KzVWvL1xobRq67u3vPuROGR13kS8PBYk3Z8c0WUXsLLZsaiuVSBbSRr058l+w/ntq6BhlNDcc0xhYS0WzTLguRhvtdxmL78xTErS49bmrIxraD6CEnECPd2shXr8N7RvQQ+m2vrG5qGG/VWyU50q2N/Ko8bJ2mhjTwlR5uuYk28q0yPAv8U81a/DMVWGV4FvjqSLcu8q0yZIGvVCpDvnxKG/lWGc7Pu3/lSLcu8m0yZJ9Rb6vkSPdGE/k2GbJ4UCdbyslturt8mwxZ4KvdKokY6dZFvk2G4fa8b1T2tuw0kW+TYbRwn1VD8sS30UW+TYa07jzv3hQj3XtN5NtkSPPvfAGJUeTbZMgC/+w+SY50/yN1qVcc75Uj3ZrIt8iwGPjqQ040kW+RIQuH89UVsmNXE/kWGbKAP39PFl4T+RYZFgNfHenWRL5FhrShXXiPOHyjdF67M4sMS4GvdHtrIt8iw+GotGJUjnTXR75FhqXAVyP/n0iLoLxyWz4i47u2h94eQ3YnUVx9HxtEvj2GLPCLD02SkX9XG/n2GLLAL9YncqS7fsaBPYbhe3n201iMdO9qZ43YY1gOfEcZ6a6P/KsYBuUnYcGG9FapXESDyL+KYcXTzGBDFvili80g8q9iKFZiX2JIA7/8ZC+5prtbeShWYl9i6FU9kDWCI/8qhuzpEJcaVgW+OrmtdvrWVQzFTi8wZIH/VuqNCcXkttr1w1cxFIuWLjD0KwJfnYJXG/lXMRRLei4wpIG/LxvK+Se1kX8dQ95ivsCQ1k6jilQXT7OtevPEdQz5Vy+bYbLLpcaQthKqRidEt3dt5F/H0PHyHCO87pDzYasNCaESFe/Ix7jURf6VDPlJKWrAIfD04/mWvvVVri9l5Nf1el/J0HnIjtlsnhUsFrdBFYZknATZ7KDV0FcjkRCyFI9x+fYJKVlWPJO9/KGWCLKsTgN66zqeZ1fhdtivMCSr2wM/Urv+Ub7xtFqtpiLyX6f017fCthXP1V/BDyL8JfJpaft+HBxPVWv6FDnBpGyoPPqZIe7zkzu3xMtZq6f6fyPU1rq/Tvi2UPf7EpBTv/aoWGP20ueRZCAOk/8zGBUYnLfryPd+UEY3JP7LkGi5+ZiM9vvnyXaV/7uJMChHQm+oIl/3hyUKDVfiVfD/CZ4KGfeGnjfshf/oP5pBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEETDfx4mnnBKfbT/AAAAAElFTkSuQmCC"
                    width="50"/>
             <p>Hi ${users.name},</p>
             <p>Your Gap order has been placed successsfully.</p> 
             <p>Thank you for shoppping with us! </p>
             <h2>Order Detail</h2>
             <p>Order id : ${users._id}</p>
             <p>Order placed on : ${users.createdAt}</p>
              `,
  
      });
};



module.exports={sendMail, orderSuccess}