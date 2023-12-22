import {  Grid, Paper } from '@mui/material';

export default function CommandmentDescriptionComponent() {
  // ... existing state and functions

  return (
    <div>      
      <Grid container spacing={3} style={{ marginBottom: '40px' }}>
        <Grid item xs={4}>
          <Paper style={{ padding: '20px' }}>
            <div style={{ fontSize: '18px' }}>- WHY</div><br />
                <div style={{ marginLeft: '20px' }}>
                    COUNSEL <br /><br />
                    AT DAWN, BEFORE THE WORLD STIRS, ANCHOR YOURSELF IN THE 13 COMMANDMENTS.<br /><br />
                    THESE AREN'T JUST WORDS, BUT YOUR SPIRITUAL ARMOR AND STRATEGY FOR THE DAY AHEAD.<br /><br />
                    REMEMBER, A WARRIOR IS DEFINED BY THEIR PREPARATION. BY GROUNDING IN THESE TRUTHS EACH MORNING, YOU NOT ONLY GUARD AGAINST THE DAY'S TRIALS BUT LEAD WITH UNWAVERING FAITH AND PURPOSE.<br /><br />
                    LET EVERY SUNRISE REMIND YOU OF THIS SACRED DUTY.
                </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ padding: '20px' }}>
            <div style={{ fontSize: '18px' }}>- WHEN</div><br />
                <div style={{ marginLeft: '20px' }}>
                    COUNSEL <br /><br />
                    IN THE VAST SPIRITUAL BATTLEFIELD, UNDERSTANDING WHEN TO INVOKE YOUR
                    PRAYERS IS AS CRUCIAL AS KNOWING HOW TO WIELD A SWORD. <br /><br />
                    THESE PRAYERS ARE NOT JUST WORDS, BUT SPIRITUAL ARMAMENTS FOR SPECIFIC MOMENTS.
                    WHENEVER YOU FIND YOURSELF AT THE CROSSROADS OF CHALLENGES, TEMPTATIONS, OR DECISIONS, REACH INTO YOUR DIVINE ARMORY.<br /><br />
                    LET THESE PRAYERS GUIDE, PROTECT, AND EMPOWER YOUR JOURNEY, ENSURING YOU ALWAYS MARCH WITH THE FORCE AND FAVOR OF HEAVEN BEHIND YOU.
                </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ padding: '20px' }}>
            <div style={{ fontSize: '18px' }}>-REFLECT </div><br />
                <div style={{ marginLeft: '20px' }}>
                    COUNSEL<br /><br />
                    AMIDST THE TUMULT OF LIFE'S BATTLES, THE ACT OF REFLECTION BECOMES THE WARRIOR'S SANCTUARY.<br /><br />
                    "LISTENING TO GOD" ISN'T JUST ABOUT HEARING, BUT UNDERSTANDING AND INTERNALIZING.
                    THESE SELF-REFLECTIVE QUESTIONS SERVE AS DIVINE COMPASS POINTS, GUIDING YOU CLOSER TO HIS WILL.<br /><br />
                    WHEN THE DAY'S DUST SETTLES AND YOU SEEK CLARITY OR DIRECTION, TURN TO THESE INQUIRIES.
                    LET THEM ILLUMINATE YOUR PATH, ENSURING YOUR STEPS RESONATE WITH THE HARMONIOUS SYMPHONY OF GOD'S INTENT.
                </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
