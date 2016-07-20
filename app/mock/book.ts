import { IBook } from "../model/book";

export var BOOKS: IBook[] = [
  {
    "_id": "0",
    "title": "Mein Äußerstes für sein Höchstes",
    "description": "",
    "category_id": "devotionals",
    "author": "Oswald Chambers",
    "isbn": "3-89175-146-X",
    "publisher": "",
    "language": "en",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "available",
    "enter_date": new Date()
  },
  {
    "_id": "1",
    "title": "I don't have enough faith to be an atheist",
    "description": "To some, the concept of having faith in a higher power or a set of religious beliefs is nonsensical. Indeed, many view religion in general, and Christianity in particular, as unfounded and unreasonable. Norman Geisler and Frank Turek argue, however, that Christianity is not only more reasonable than all other belief systems, but is indeed more rational than unbelief itself. With conviction and clear thinking, Geisler and Turek guide readers through some of the traditional, tested arguments for the existence of a creator God. They move into an examination of the source of morality and the reliability of the New Testament accounts concerning Jesus. The final section of the book deals with a detailed investigation of the claims of Christ. This volume will be an interesting read for those skeptical about Christianity, as well as a helpful resource for Christians seeking to articulate a more sophisticated defense of their faith.",
    "category_id": "apologetic",
    "author": "Norman L. Geisler, Frank Turek",
    "isbn": "978-1-58134-561-2",
    "publisher": "Crossway Books",
    "language": "en",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "available",
    "enter_date": new Date(),
    "recommended": true
  },
  {
    "_id": "2",
    "title": "Petualangan menjelajahi Perjanjian Baru",
    "description": "Panduan Membaca Alkitab dari Matius hingga Wahyu. Buku panduan populer yang menampilkan paparan lengkap dari keseluruhan Perjanjian Baru. Menyediakan konteks yang bermanfaat untuk pemahaman pribadi dan penerapan dari setiap kitab.",
    "category_id": "bible",
    "author": "Ray C.Stedman",
    "isbn": "978-1-57293-407-8",
    "publisher": "",
    "language": "id",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "available",
    "enter_date": new Date(),
    "recommended": true
  },
  {
    "_id": "3",
    "title": "Petualangan menjelajahi Perjanjian Lama",
    "description": "Buku panduan populer yang menampilkan paparan lengkap dari keseluruhan Perjanjian Lama. Menyediakan konteks yang bermanfaat untuk pemahaman pribadi dan penerapan dari setiap kitab.",
    "category_id": "bible",
    "author": "Ray C.Stedman",
    "isbn": "978-1-57293-406-1",
    "publisher": "",
    "language": "id",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "borrowed",
    "enter_date": new Date(),
    "borrower": {
      "_id": "max.mustermann@gmail.com",
      "first_name": "Max",
      "last_name": "Mustermann"
    },
    "loan_period": 30
  },
  {
    "_id": "4",
    "title": "Wende am Abgrund",
    "description": "",
    "category_id": "biography-testimony",
    "author": "Pauline Hamilton",
    "isbn": "978-3501015346",
    "publisher": "St. Johannis-Druckerei; 12., Aufl. edition (July 2006)",
    "language": "de",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "borrowed",
    "enter_date": new Date(),
    "borrower": {
      "_id": "bettina.dev@gmail.com",
      "first_name": "Bettina",
      "last_name": "Dev"
    },
    "loan_period": 30
  },
  {
    "_id": "5",
    "title": "The Case for Grace",
    "description": "The Case for a Creator explored the scientific evidence for God; The Case for Christ investigated the historical evidence for Jesus; The Case for Faith responded to eight major objections about Christianity; The Case for The Real Jesus refuted the current challenges to the Bible and Christ.",
    "category_id": "biography-testimony",
    "author": "Lee Strobel",
    "isbn": "978-0-310-25917-6",
    "publisher": "Zondervan (April 9, 2013)",
    "language": "en",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "reserved",
    "borrower": {
      "_id": "max.mustermann@gmail.com",
      "first_name": "Max",
      "last_name": "Mustermann"
    },
    "enter_date": new Date(),
    "recommended": true
  },
  {
    "_id": "6",
    "title": "Devotions for a sacred marriage",
    "description": "What if God designed marriage to make us holy more than to make us happy? By popular demand, the author of Sacred Marriage returns to the topic of how God uses marriage to expand our souls and make us holy. With all new material, Devotions for a Sacred Marriage explores how God can reveal himself to you through your marriage and help you grow closer to him as well as to your spouse. Fifty-two devotions encourage you to build your marriage around God’s priorities. From learning to live with a fellow sinner, to the process of two becoming one, to sharing our lives as brothers and sisters in Christ, Devotions for a Sacred Marriage challenges couples to embrace the profound and soul-stretching reality of Christian marriage.",
    "category_id": "marriage-partnership",
    "author": "Gary Thomas",
    "isbn": "602-9254-19-7",
    "publisher": "Zondervan (April 4, 2005)",
    "language": "en",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "not_available",
    "enter_date": new Date(),
    "recommended": true
  },
  {
    "_id": "7",
    "title": "Die fünf Sprachen der Liebe",
    "description": "",
    "category_id": "marriage-partnership",
    "author": "Gary Chapman",
    "isbn": "978-3-86122-126-5",
    "publisher": "Francke-Buchhandlung; 8. edition (2010)",
    "language": "de",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "available",
    "enter_date": new Date()
  },
  {
    "_id": "8",
    "title": "Sacred Parenting",
    "description": "In this six-session video-based small group bible study, Sacred Parenting, Gary Thomas uses a unique lens to look at parenting, moving beyond raising great children to becoming more holy as a person. What if one of God s primary intentions for you as a parent isn t about successfully raising perfect children, but about you becoming more holy? In Sacred Parenting Gary Thomas illustrates how God can transform lessons in raising children into opportunities to grow in the image of Christ. It will help you and your group, rediscover parenting from a different perspective: as a method of spiritual formation expressly designed by God to shape your soul in ways you could not imagine! Designed for use with the Sacred Parenting DVD (sold separately), this Participant Guide will help you dig deeper into learning how God can transform dirty diapers, toddler tantrums, and a teenager s silence into occasions for becoming more like Christ. Sessions include: 1. The Soul-Transforming Journey of Parenting 2. God-Centered Parenting 3. The Hardest Hurt of All 4. Embracing Our Insignificance 5. Walking on the Wild Side of Parenting 6. The Gold Behind the Guilt",
    "category_id": "familiy-parenting",
    "author": "Gary Thomas",
    "isbn": "602-9254-27-8",
    "publisher": "ZONDERVAN (24 Oct 2010)",
    "language": "en",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "available",
    "enter_date": new Date(),
    "recommended": true
  },
  {
    "_id": "9",
    "title": "Boundaries with Kids",
    "description": "",
    "category_id": "familiy-parenting",
    "author": "Dr. Henry Cloud / Dr. John Townsend",
    "isbn": "0-310-24315-7",
    "publisher": "ZONDERVAN (9 Feb 2003)",
    "language": "en",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "available",
    "enter_date": new Date()
  },
  {
    "_id": "10",
    "title": "Problems of Christian Leadership",
    "description": "Christian leaders face challenges. But God works with us and through us to accomplish his purposes. Available here for the first time in English is John Stott's practical wisdom for younger leaders. Speaking personally from his own experience, Stott addresses issues of discouragement, self-discipline, relationships and youth. Also includes reflections on John Stott's ministry from two of his former study assistants, Mark Labberton and Corey Widmer, plus excerpts of Stott's writing about ministry, leadership and service.",
    "category_id": "congregation-service",
    "author": "John Stott",
    "isbn": "978-602-0904-03-0",
    "publisher": "InterVarsity Press (6 Jan 2014)",
    "language": "id",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "available",
    "enter_date": new Date(),
    "recommended": true
  },
  {
    "_id": "11",
    "title": "Memimpin Kelompok Kecil dengan Tujuan",
    "description": "Untuk pemimpin yang baru memulai kelompok kecil, pemimpin berpengalaman yang merasa kelompok kecilnya kehilangan tujuan, atau pemimpin yang ingin meningkatkan lagi kelompok kecilnya, buku ini merupakan peta perjalanan yang patut diikuti. Setiap bab berisi ide-ide yang langsung dapat diterapkan dan juga cara-cara membentuk kelompok kecil dari waktu ke waktu. Dengan bantuan keahlian Steve Gladen, Anda dapat mendefinisikan keberhasilan dengan jelas, mengembangkan rencana kepemimpinan pribadi, mengundang orang-orang ke dalam kelompok dan menolong para anggota memenuhi Amanat Agung dan Hukum yang Terutama.",
    "category_id": "congregation-service",
    "author": "Steve Gladen",
    "isbn": "978-602-9254-52-5",
    "publisher": "",
    "language": "id",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "available",
    "enter_date": new Date()
  },
  {
    "_id": "12",
    "title": "What Does the Bible Really Teach about Homosexuality?",
    "description": "In this timely book, award-winning author Kevin DeYoung challenges each of us--the skeptic and the seeker, the certain and the confused--to take a humble look at God's Word regarding the issue of homosexuality.\nAfter examining key biblical passages in both the Old and New Testaments and the Bible's overarching teaching regarding sexuality, DeYoung responds to popular objections raised by Christians and non-Christians alike, making this an indispensable resource for thinking through one of the most pressing issues of our day.",
    "category_id": "society",
    "author": "Kevin DeYoung",
    "isbn": "978-1433549373",
    "publisher": "Crossway Books (30 April 2015)",
    "language": "id",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "available",
    "enter_date": new Date(),
    "recommended": true
  },
  {
    "_id": "13",
    "title": "Basic Christianity",
    "description": "In this book world-renowned scholar and preacher John Stott clearly defines both the fundamental claims of Christianity and the proper outworkings of those basic beliefs in the daily lives of believers. Stott's \"Basic Christianity\" is a sound, sensible guide for anyone seeking an intellectually satisfying presentation of the Christian faith.",
    "category_id": "faith-discipleship",
    "author": "John Stott",
    "isbn": "0-85110-353-7",
    "publisher": "William B Eerdman Co; Anniversary. edition (15 Oct 2008)",
    "language": "en",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "available",
    "enter_date": new Date(),
    "recommended": true
  },
  {
    "_id": "14",
    "title": "Not A Fan",
    "description": "Das Wörterbuch beschreibt einen Fan als \"leidenschaftlichen Bewunderer\". So gesehen hat Jesus eine ganze Menge Fans. Viele wollen ihm nahe sein. Ein regelmäßiger Gottesdienstbesuch, ein mitgesprochenes Gebet oder der Autoaufkleber mit christlicher Botschaft sollen Ausdruck dafür sein. Aber Jesus geht es nicht um Bewunderer. Er wollte keinen Fanclub.\n\nWas bedeutet es wirklich, Christ zu sein? Nehmen Sie die Herausforderung an und werfen Sie einen ehrlichen Blick auf Ihr Glaubensleben. Vielleicht klingt Gottes Aufruf nach konsequenter Nachfolge zu radikal. Doch Jesus wünscht sich genau das von jedem Christ.\n\nÜbrigens: Von der englischsprachigen Originalausgabe dieses Buches wurden inzwischen über 1 Million Exemplare verkauft. Offenbar hat es Kyle Idleman geschafft, mit seinen Gedanken zur gelebten Nachfolge den Funken bei Vielen überspringen zu lassen.",
    "category_id": "faith-discipleship",
    "author": "Kyle Idleman",
    "isbn": "978-602-18547-2-3",
    "publisher": "Gerth Medien (3 Jan 2013)",
    "language": "id",
    "owner": {
      "_id": "info@immanuel-berlin.de",
      "first_name": "FeG",
      "last_name": "Immanuel Berlin"
    },
    "status": "available",
    "enter_date": new Date()
  }
];
