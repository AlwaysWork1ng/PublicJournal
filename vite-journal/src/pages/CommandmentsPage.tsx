import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuComponent from './MenuComponent';
import CommandmentDescriptionComponent from './CommandmentComponent';

export default function Commandments() {
    const [openPopover, setOpenPopover] = React.useState<number | null>(null);

    const handleOpen = (index: number) => (_event: React.MouseEvent<HTMLButtonElement>) => {
        setOpenPopover(index);
    };

    const handleClose = () => {
        setOpenPopover(null);
    };

    // Array to hold the title and content for each commandment
    const commandments = [
        {
            title: '1. DON THE ARMOR OF GOD',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "PUT ON THE FULL ARMOR OF GOD, SO THAT YOU CAN TAKE YOUR STAND AGAINST THE DEVIL'S SCHEMES."
                        EPHESIANS 6:11
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        LORD OF HOSTS, AS I FACE THE DAY'S BATTLES, HELP ME TO ARMOR MYSELF IN YOUR TRUTH, RIGHTEOUSNESS, AND PEACE.
                        MAY I BE EVER READY TO DEFLECT THE FIERY ARROWS OF THE ENEMY AND STAND VALIANT IN YOUR NAME.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHEN FACING THE DAWN, AS YOU PREPARE YOURSELF FOR THE DAY'S BATTLES, WHETHER THEY BE PHYSICAL, MENTAL, OR SPIRITUAL.
                        AS A WARRIOR ARMORS HIMSELF BEFORE THE BATTLE, SO MUST YOU FORTIFY YOUR SPIRIT AT DAYBREAK.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        DID I GIRD MYSELF IN THE TRUTH OF GOD, SHIELDING MY HEART AND MIND FROM SPIRITUAL AMBUSHES TODAY?
                        HOW DID I EMPLOY THE HELMET OF SALVATION AND BREASTPLATE OF RIGHTEOUSNESS IN TODAY'S SPIRITUAL CONFRONTATIONS?
                    </div>
                </div>
            )
        },
        {
            title: '2. WIELD THE SWORD OF TRUTH',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "FOR THE WORD OF GOD IS ALIVE AND ACTIVE. SHARPER THAN ANY DOUBLE-EDGED SWORD."
                        -HEBREWS 4:12
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        ALMIGHTY GOD, GRANT ME THE WISDOM TO DISCERN YOUR WORD,
                        TO WIELD IT WITH PRECISION AND POWER, CUTTING THROUGH THE DARKNESS AND ILLUMINATING THE PATH OF RIGHTEOUSNESS.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        IN MOMENTS OF DOUBT OR WHEN FACED WITH DECEPTION, AKIN TO A WARRIOR CHOOSING THE SHARPEST BLADE WHEN DISCERNING TRUTH FROM LIE.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WERE THERE MOMENTS TODAY WHEN THE WORD OF GOD WAS MY PRIMARY WEAPON AGAINST CONFUSION OR DECEPTION?
                        HOW DID I SHARPEN MY SPIRITUAL BLADE MY UNDERSTANDING AND APPLICATION OF SCRIPTURE — TODAY?
                    </div>
                </div>
            )
        },
        {
            title: '3. STAY VIGILANT',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "BE ALERT AND OF SOBER MIND. YOUR ENEMY THE DEVIL PROWLS AROUND LIKE A ROARING LION LOOKING FOR SOMEONE TO DEVOUR."
                        -1 PETER 5:8
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WATCHFUL GUARDIAN, KEEP MY SENSES SHARP, MY SPIRIT ALERT. LET NOT THE DECEPTIONS OF THE ADVERSARY CLOUD MY VISION.
                        GUIDE ME TO STAND SENTINEL, EVER WATCHFUL FOR THREATS THAT CHALLENGE YOUR KINGDOM.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHENEVER TEMPTATION'S SHADOWS CREEP NEAR, OR WHEN COMPLACENCY THREATENS.
                        LIKE A SENTINEL ON NIGHTTIME WATCH, REMAIN ALERT TO THE UNSEEN DANGERS LURKING IN THE DARKNESS.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        DID I GUARD MY HEART AND MIND, ENSURING NO FOOTHOLD WAS GIVEN TO THE ADVERSARY TODAY?
                        IN WHICH MOMENTS WAS MY SPIRITUAL ALERTNESS TESTED, AND HOW DID I RESPOND?
                    </div>
                </div>
            )
        },
        {
            title: '4. FIGHT THE GOOD FIGHT',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "FIGHT THE GOOD FIGHT OF THE FAITH. TAKE HOLD OF THE ETERNAL LIFE TO WHICH YOU WERE CALLED."
                        1 TIMOTHY 6:12
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        DIVINE COMMANDER, INFUSE MY SOUL WITH THE WARRIOR'S ZEAL.
                        MAY I STAND ON THE FRONTLINES OF FAITH, EVER-READY, EVER-RESILIENT, FIGHTING THE NOBLE FIGHT FOR YOUR GLORY.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHEN FACED WITH CHALLENGES TO YOUR FAITH OR PRINCIPLES, STAND RESOLUTE.
                        AS A WARRIOR BRACES FOR THE BATTLE'S CLIMAX, LET YOUR SPIRIT BE UNWAVERING.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHAT BATTLES OF FAITH DID I CONFRONT TODAY, AND DID I ADVANCE OR RETREAT?
                        WERE THERE SITUATIONS WHERE I FELT OVERWHELMED, YET CHOSE TO STAND MY GROUND IN THE NAME OF THE LORD?
                    </div>
                </div>
            )
        },
        {
            title: '5. SERVE WITH COURAGE',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "BE STRONG AND COURAGEOUS. DO NOT BE AFRAID; DO NOT BE DISCOURAGED, FOR THE LORD YOUR GOD WILL BE WITH YOU WHEREVER YOU GO."
                        -JOSHUA 1:9
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        MIGHTY FORTRESS, EMBOLDEN MY HEART WITH COURAGE THAT DOES NOT WAVER.
                        AS I TRAVERSE THE VALLEYS AND PEAKS, MAY I SERVE YOUR CAUSE FEARLESSLY, REFLECTING YOUR ETERNAL MIGHT.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        IN THE FACE OF GREAT ADVERSITY OR WHEN THE ODDS SEEM INSURMOUNTABLE.
                        LIKE A WARRIOR CHARGING HEADLONG AGAINST A MIGHTIER FORCE, MARCH FORTH WITH UNYIELDING BRAVERY.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHEN DID I FEEL FEAR TODAY, AND HOW DID I SUMMON DIVINE BRAVERY TO FACE IT?
                        IN WHAT WAYS DID I DEMONSTRATE VALOR, NOT JUST FOR MYSELF BUT FOR OTHERS, BY LEANING INTO GOD'S STRENGTH?
                    </div>
                </div>
            )
        },
        {
            title: '6. STAND FIRM IN FAITH',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "THEREFORE, MY DEAR BROTHERS AND SISTERS, STAND FIRM. LET NOTHING MOVE YOU."
                        -1 CORINTHIANS 15:58
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        UNYIELDING ROCK, GROUND ME IN UNWAVERING FAITH.
                        NO MATTER THE ONSLAUGHT, LET ME STAND FIRM, ROOTED IN YOUR WORD, AN IMMOVABLE BEACON AMIDST LIFE'S TEMPESTS.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHEN THE GROUND BENEATH FEELS SHAKY, AND DOUBT TRIES TO UPROOT YOU.
                        LIKE A WARRIOR IN A PHALANX, REMAIN STEADFAST AND UNYIELDING.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WERE THERE TEMPESTS TODAY THAT THREATENED TO SWAY MY FAITH, AND HOW DID I ANCHOR MYSELF?
                        HOW DID I REINFORCE THE WALLS OF MY SPIRITUAL FORTRESS AGAINST THE SIEGES OF DOUBT OR DESPAIR?
                    </div>
                </div>
            )
        },
        {
            title: '7. WAGE WAR WITH RIGHTEOUSNESS',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "THE WEAPONS WE FIGHT WITH ARE NOT THE WEAPONS OF THE WORLD. ON THE CONTRARY, THEY HAVE DIVINE POWER TO DEMOLISH STRONGHOLDS."
                        -2 CORINTHIANS 10:4
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        RIGHTEOUS JUDGE, EMPOWER ME TO COMBAT WITH PURITY AND VIRTUE.
                        LET MY ACTIONS RESONATE WITH DIVINE INTENT, DEMOLISHING EVIL AND UPHOLDING WHAT IS HOLY.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHEN CONFRONTED WITH MORAL CHOICES OR THE URGE TO RETALIATE.
                        AS A KNIGHT CHOOSES THE NOBLE PATH IN WAR, SEEK THE HIGH GROUND OF VIRTUE.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHICH OF TODAY'S CONFLICTS REQUIRED ME TO CHOOSE THE RIGHTEOUS PATH OVER THE EASY ONE?
                        HOW DID I ENSURE THAT MY ACTIONS IN BATTLE MIRRORED THE DIVINE STRATEGY RATHER THAN HUMAN IMPULSE?
                    </div>
                </div>
            )
        },
        {
            title: '8. RALLY WITH FELLOW WARRIORS',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "AS IRON SHARPENS IRON, SO ONE PERSON SHARPENS ANOTHER."
                        -PROVERBS 27:17
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        KING OF UNITY, BIND ME IN FELLOWSHIP WITH MY BRETHREN.
                        AS IRON SHARPENS IRON, MAY WE UPLIFT, SUPPORT, AND FORTIFY EACH OTHER IN THE SPIRITUAL BATTLES WE FACE.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        IN TIMES OF ISOLATION, OR WHEN UNITY CAN FORGE A PATH FORWARD.
                        AS WARRIORS GATHER BEFORE A SIEGE, SEEK THE STRENGTH OF BROTHERHOOD.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHO WERE MY COMRADES IN TODAY'S SPIRITUAL SKIRMISHES, AND HOW DID WE FORTIFY EACH OTHER?
                        DID I SEEK THE COUNCIL OR
                        COMPANIONSHIP OF FELLOW WARRIORS TO STRATEGIZE OR REJUVENATE?
                    </div>
                </div>
            )
        },
        {
            title: '9. BE A BEACON OF HOPE',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "LET YOUR LIGHT SHINE BEFORE OTHERS, THAT THEY MAY SEE YOUR GOOD DEEDS AND GLORIFY YOUR FATHER IN HEAVEN."
                        -MATTHEW 5:16
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        RADIANT LIGHT, KINDLE WITHIN ME AN UNDYING FLAME OF HOPE.
                        MAY I SHINE BRIGHTLY AMIDST THE SHADOWS, LEADING LOST SOULS TOWARD YOUR REDEMPTIVE EMBRACE.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        IN MOMENTS OF DESPAIR, EITHER YOURS OR ANOTHER'S.
                        LIKE A LIGHTHOUSE GUIDING SHIPS THROUGH THE DARKEST NIGHT, SHINE BRIGHT WITH OPTIMISM.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        IN THE MIDST OF TODAY'S SHADOWS, HOW DID I SHINE THE LIGHT OF HOPE AND TRUTH?
                        WHO APPROACHED MY BEACON SEEKING WARMTH OR GUIDANCE, AND HOW DID I RESPOND?
                    </div>
                </div>
            )
        },
        {
            title: '10. SEEK WISDOM IN BATTLE',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "IF ANY OF YOU LACKS WISDOM, YOU SHOULD ASK GOD, WHO GIVES GENEROUSLY TO ALL WITHOUT FINDING FAULT, AND IT WILL BE GIVEN TO YOU."
                        -JAMES 1:5
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        SOVEREIGN OF WISDOM, IN THE MIDST OF CHAOS AND CONFLICT, WHISPER YOUR WISDOM TO MY SOUL.
                        GUIDE MY STEPS, MY WORDS, AND MY DEEDS, THAT I MAY NAVIGATE THE BATTLEFIELD WITH DIVINE DISCERNMENT.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHEN DECISIONS WEIGH HEAVY, AND THE PATH FORWARD IS UNCLEAR.
                        AS A GENERAL CONSULTS HIS MAPS IN THE WAR ROOM, ASK FOR GOD'S GUIDANCE.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHICH CROSSROADS TODAY DEMANDED DIVINE WISDOM, AND DID I PAUSE TO SEEK IT?
                        HOW DID I ENSURE MY STRATEGIES AND CHOICES RESONATED WITH THE WISDOM FROM ABOVE RATHER THAN EARTHLY INSIGHT?
                    </div>
                </div>
            )
        },
        {
            title: '11. STAND TRUE IN ADVERSITY',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "WHEN YOU PASS THROUGH THE WATERS, I WILL BE WITH YOU; AND WHEN YOU PASS THROUGH THE RIVERS, THEY WILL NOT SWEEP OVER YOU."
                        -ISAIAH 43:2
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        STEADFAST PROTECTOR, WHEN THE TORRENTS OF ADVERSITY SURGE, BE MY ANCHOR.
                        GRANT ME THE FORTITUDE TO STAND TRUE, UNSHAKEN, A TESTAMENT TO YOUR ENDURING LOVE.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        IN THE FACE OF RIDICULE, PERSECUTION, OR PERSONAL LOSS.
                        AS A WARRIOR STANDS TALL DESPITE ARROWS RAINING DOWN, LET YOUR FAITH BE YOUR SHIELD.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHEN THE STORMS OF LIFE BATTERED MY STANCE TODAY, HOW DID I REINFORCE MY POSITION IN CHRIST?
                        WHICH ADVERSITIES TESTED THE INTEGRITY OF MY SPIRITUAL ARMOR, AND HOW DID I MEND ITS BREACHES?
                    </div>
                </div>
            )
        },
        {
            title: '12. LEAD WITH LOVE',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "ABOVE ALL, LOVE EACH OTHER DEEPLY, BECAUSE LOVE COVERS OVER A MULTITUDE OF SINS."
                        -1 PETER 4:8
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        LORD OF LOVE, DRAPE MY SPIRIT IN THE CLOAK OF YOUR DIVINE AFFECTION.
                        MAY LOVE BE MY COMPASS, GUIDING MY ACTIONS, AND SHAPING MY ENCOUNTERS WITH FRIEND AND FOE ALIKE.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHEN ANGER, PREJUDICE, OR HATE SEEMS EASIER.
                        LIKE A TRUE LEADER ON THE BATTLEFIELD, WHO INSPIRES THROUGH COMPASSION, CHOOSE THE PATH OF LOVE.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        HOW DID I COMMAND TODAY'S BATTLES WITH LOVE AS MY STANDARD-BEARER?
                        WHO DID I SHIELD OR UPLIFT WITH LOVE'S BANNER, ENSURING THEY FELT THE WARMTH OF CHRIST'S AFFECTION?
                    </div>
                </div>
            )
        },
        {
            title: '13. ENDURE TO THE END',
            content: (
                <div>
                    VERSE:<br />
                    <div style={{ marginLeft: '20px' }}>
                        "BUT THE ONE WHO STANDS FIRM TO THE END WILL BE SAVED."
                        -MATTHEW 24:13
                    </div><br />
                    PRAYER:<br />
                    <div style={{ marginLeft: '20px' }}>
                        ALPHA AND OMEGA, IN EVERY CHALLENGE, EVERY TRIAL, INFUSE ME WITH PERSEVERANCE.
                        LET ME ENDURE, PUSHING FORWARD WITH UNWAVERING RESOLVE UNTIL I STAND VICTORIOUS IN YOUR ETERNAL EMBRACE.
                    </div><br />
                    WHEN TO PRAY:<br />
                    <div style={{ marginLeft: '20px' }}>
                        WHEN EXHAUSTION SETS IN, AND YOU FEEL LIKE SURRENDERING.
                        AS A WARRIOR MUSTERS A FINAL STAND, EVEN WHEN DRAINED, FIND THE INNER FIRE TO PRESS ON.
                    </div><br />
                    LISTENING TO GOD:<br />
                    <div style={{ marginLeft: '20px' }}>
                        IN MOMENTS OF FATIGUE OR
                        DISCOURAGEMENT TODAY, HOW DID I RALLY MY SPIRIT TO PRESS ON?
                        DID I RECOGNIZE THE SIGNS OF WEARINESS IN MY FELLOW WARRIORS AND OFFER THEM SUSTENANCE FOR ENDURANCE?
                    </div>
                </div>
            )
        }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h2" style={{ marginBottom: '20px' }}>13 Commandments</Typography>
            <MenuComponent />
            <CommandmentDescriptionComponent />
            {commandments.map((commandment, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <Button variant="contained" onClick={handleOpen(index)}>
                        {commandment.title}
                    </Button>
                    <Popover
                        open={openPopover === index}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <Typography style={{ padding: '20px' }}>
                            {commandment.content}
                        </Typography>
                    </Popover>
                </div>
            ))}
        </div>
    );
}
