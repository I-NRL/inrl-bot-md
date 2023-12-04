const {
        inrl,
        sleep
} = require('../lib');
const dog = ["𓃩", "𓃦", "𓃥", "𓃙", "𓃥", "𓃙", "𓃥", "𓃙", "𓃥", "𓃙", "𓃩", "𓃠"];
const goat = ["𓃛", "𓃚", "𓃔", "𓃓", "𓃒", "𓃞", "𓃘", "𓃵", "𓃗", "𓃚", "𓃔", "𓃛", "𓃜"];
const bird = ["𓅠", "𓅞", "𓅡", "𓅯", "𓅮", "𓅯", "𓅮", "𓅯", "𓅮", "𓅯", "𓅮", "𓅛", "𓅥", "𓅭", "𓅟"];
const dq = ["A dog is the only thing on earth that loves you more than you love yourself.", "Animals have come to mean so much in our lives. We live in a fragmented and disconnected culture. Politics are ugly, religion is struggling, technology is stressful, and the economy is unfortunate. What’s one thing that we have in our lives that we can depend on? A dog or a cat loving us unconditionally, every day, very faithfully.", "No matter how you’re feeling, a little dog gonna love you.", "There’s a saying. If you want someone to love you forever, buy a dog, feed it and keep it around.", "When the dog looks at you, the dog is not thinking what kind of a person you are. The dog is not judging you.", "The great pleasure of a dog is that you may make a fool of yourself with him and not only will he not scold you, but he will make a fool of himself too.", "Actually, my dog I think is the only person who consistently loves me all the time.", "My main characters are the most sunny, happy, optimistic, loving creatures on the face of the Earth. I couldn’t be happier that’s where I start. I can put as many flawed people in the dog’s world as I like, but the dog doesn’t care. Dog doesn’t judge, dog doesn’t dislike. Dog loves. That’s not so bad.", "Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day.", "There is no faith which has never yet been broken, except that of a truly faithful dog", "If you pick up a starving dog and make him prosperous he will not bite you. This is the principal difference between a dog and man.", "A dog will make eye contact. A cat will, too, but a cat’s eyes don’t even look entirely warm-blooded to me, whereas a dog’s eyes look human except less guarded. A dog will look at you as if to say, ‘What do you want me to do for you? I’ll do anything for you.’ Whether a dog can in fact, do anything for you if you don’t have sheep [I never have] is another matter. The dog is willing.", "Dogs have given us their absolute all. We are the center of their universe. We are the focus of their love and faith and trust. They serve us in return for scraps. It is without a doubt the best deal man has ever made."]
const gq = ["Goats can be taught their name and to come when called.", "They are very picky eaters. They have very sensitive lips, which they use to “mouth” things in search of clean and tasty food. They will often refuse to eat hay that has been walked on or lying around loose for a day.", "Goats use the sneeze sound as an alarm. They use a sneeze to warn each other of danger, whether real or imagined.", "They are extremely intelligent and curious and are very often not given credit for being the smart and loving creatures they actually are.", "Goats dislike water and would rather leap over streams and puddles than step in them.", "A baby goat is called a kid, but did you know that a goat giving birth is said to be `kidding`?", "Goats are sociable animals and therefore become depressed if they are separated or isolated from their companions, however they are not flock-orientated like sheep.", "They are one of the cleanliest animals and are much more selective feeders than cows, sheep, pigs, swine and even dogs.", "Goats are very intelligent and curious animals. Their inquisitive nature is exemplified in their constant desire to explore and investigate anything unfamiliar which they come across.", "They communicate with each other by bleating. Mothers will often call to their young (kids) to ensure they stay close-by. Mother and kid goats recognise each other’s calls soon after the mothers give birth."]
const bq = ["The most amount yolks found in a single chicken egg were 9 yolks.", "Although an owl can turn its head 360 degree it cannot move its eyes.", "The eggs of humming bird are of the size of a pea.", "A penguin is the only bird that can walk straight.", "Crows have the largest brain in relation to its body, of any avian family.", "World’s only wingless bird is the Kiwi of New Zealand.", "The egg of an ostrich needs to be boiled for 2-hours in order to be a hard-boiled egg.", "The world’s only poisonous bird is Pitohui of Papua, the poison is found on its skin and feathers.", "A bird’s heart beats up to 1000 times per minute while flying."]
inrl({
        pattern: 'dog',
        DismissPrefix: true,
        fromMe: true,
        type: "fun"
}, async (m) => {
        const msg = await m.send("𓃠");
        let spae = "";
        for (i = 1; i < dog.length; i++) {
                await sleep(250);
                spae = spae + " ";
                await msg.edit(spae + dog[i] + spae);
        }
        await msg.react("🐶");
        return await msg.edit(dq[Math.floor(Math.random() * dq.length)]);
});
inrl({
        pattern: 'goat',
        DismissPrefix: true,
        fromMe: true,
        type: "fun"
}, async (m) => {
        const msg = await m.send("𓃜");
        let spae = "";
        for (i = 1; i < goat.length; i++) {
                await sleep(250);
                spae = spae + " ";
                await msg.edit(spae + goat[i] + spae);
        }
        await msg.react("🐐");
        return await msg.edit(gq[Math.floor(Math.random() * gq.length)]);
});
inrl({
        pattern: 'bird',
        DismissPrefix: true,
        fromMe: true,
        type: "fun"
}, async (m) => {
        const msg = await m.send("𓅟");
        let spae = "";
        for (i = 1; i < bird.length; i++) {
                await sleep(250);
                spae = spae + " ";
                await msg.edit(spae + bird[i] + spae);
        }
        await msg.react("🕊️");
        return await msg.edit(bq[Math.floor(Math.random() * bq.length)]);
});
