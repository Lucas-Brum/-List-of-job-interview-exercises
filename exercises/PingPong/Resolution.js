

for (let i = 1; i < 100; i++) {

    if(i % 3 == 0)
        if(i % 5 == 0)
            console.log("PingPong")

        else
            console.log("ping")

    else if(i % 5 == 0)
        console.log("pong")

    else
        console.log(i)

}