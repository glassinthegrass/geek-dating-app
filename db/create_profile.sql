INSERT INTO profiles(first_name,last_name,gamer_tag,location,about_me,sexual_orientation,sex,preferred_pronoun,height,activity_level,religion,education,occupation,kids,alcohol,smoking,cannabis,recreational_drugs,favorite_food,current_game,photo_one,photo_two,photo_three,photo_four,photo_five,user_id) VALUES
($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,(SELECT user_id from users where user_id=$26));