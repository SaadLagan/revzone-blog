/* ============================================================
   RevZone – Blog Post Data (acts as a mock JSON database)
   ============================================================ */
const POSTS = [
  {
    id: 1,
    title: "2025 Porsche 911 GT3 RS: The Last Pure Petrol Masterpiece?",
    category: "reviews",
    date: "Oct 20, 2026",
    author: "Saad Lagan",
    readTime: "8 min read",
    excerpt: "We strap into the most extreme 911 ever made and push it around the Nürburgring. Is it a masterpiece or has Porsche gone too far?",
    emoji: "🏎️",
    featured: true,
    content: `
      <h2>First Impressions</h2>
      <p>The 2025 Porsche 911 GT3 RS arrives wearing its aggression openly. Every vent, every wing, every piece of aerodynamic sculpting has a purpose. This isn't a car trying to look fast — it genuinely <strong>is</strong> fast, and every element tells that story.</p>
      <p>Slide into the carbon bucket seat, pull the harness tight, and you instantly feel the 911 GT3 RS communicate through the chassis. The steering wheel is flat-bottomed, wrapped in Alcantara, with buttons for everything you need and nothing you don't.</p>

      <h2>The Engine: A Symphony at 9,000 RPM</h2>
      <p>Underneath that engine lid sits Porsche's legendary 4.0-litre naturally aspirated flat-six. It produces 525 hp and screams to a 9,000 rpm redline like nothing else you can buy today. In an era of turbocharging and electrification, this engine is almost radical in its purity.</p>
      <blockquote>"Flat out at 9,000 rpm, the sound alone is worth every penny of the asking price." — Saad Lagan</blockquote>
      <p>The PDK gearbox fires off shifts in milliseconds. But the real joy is in keeping it in a lower gear and riding the power band all the way to the limiter — over and over again.</p>

      <h2>On Track: Pure Theatre</h2>
      <p>We drove our test car at the Nürburgring, and the 911 GT3 RS devoured every corner with surgical precision. The weissach package adds a front axle with rear-axle steering, making this wide machine feel remarkably agile.</p>

      <div class="rating-box">
        <h3>RevZone Ratings</h3>
        <div class="rating-row">
          <span class="rating-label">Performance</span>
          <div class="rating-bar"><div class="rating-fill" style="width:98%"></div></div>
          <span class="rating-val">9.8</span>
        </div>
        <div class="rating-row">
          <span class="rating-label">Handling</span>
          <div class="rating-bar"><div class="rating-fill" style="width:96%"></div></div>
          <span class="rating-val">9.6</span>
        </div>
        <div class="rating-row">
          <span class="rating-label">Sound</span>
          <div class="rating-bar"><div class="rating-fill" style="width:100%"></div></div>
          <span class="rating-val">10</span>
        </div>
        <div class="rating-row">
          <span class="rating-label">Practicality</span>
          <div class="rating-bar"><div class="rating-fill" style="width:35%"></div></div>
          <span class="rating-val">3.5</span>
        </div>
        <div class="rating-row">
          <span class="rating-label">Value</span>
          <div class="rating-bar"><div class="rating-fill" style="width:70%"></div></div>
          <span class="rating-val">7.0</span>
        </div>
      </div>

      <h2>Key Specifications</h2>
      <table class="spec-table">
        <tr><th>Spec</th><th>Detail</th></tr>
        <tr><td>Engine</td><td>4.0L Naturally Aspirated Flat-Six</td></tr>
        <tr><td>Power</td><td>525 hp @ 8,500 rpm</td></tr>
        <tr><td>Torque</td><td>465 Nm @ 6,300 rpm</td></tr>
        <tr><td>0–100 km/h</td><td>3.2 seconds</td></tr>
        <tr><td>Top Speed</td><td>296 km/h</td></tr>
        <tr><td>Gearbox</td><td>7-speed PDK</td></tr>
        <tr><td>Weight</td><td>1,450 kg (dry)</td></tr>
      </table>

      <h2>Verdict</h2>
      <p>The 2025 Porsche 911 GT3 RS is a monument to what naturally aspirated, high-revving sports cars can be. In a world rapidly electrifying, this might be one of the last of its kind. Buy one now — your future self will thank you.</p>

      <div class="article-score">
        <div class="score-num">9.2</div>
        <div class="score-label">RevZone Score / 10</div>
      </div>
    `
  },
  {
    id: 2,
    title: "Toyota Supra MK4: Why It's Still the King of JDM Icons",
    category: "classics",
    date: "Oct 15, 2026",
    author: "Bilal Raza",
    readTime: "6 min read",
    excerpt: "Three decades on, the MK4 Supra remains one of the most coveted Japanese sports cars ever built. We explore why the legend only grows stronger.",
    emoji: "🏁",
    featured: true,
    content: `
      <h2>The Legend of the 2JZ</h2>
      <p>Ask any car enthusiast to name a legendary engine and the Toyota 2JZ-GTE will be near the top of every list. This inline-six, twin-turbocharged unit debuted in the A80 Supra in 1993 and has been tuner bait ever since.</p>
      <p>The stock 2JZ makes around 330 hp, but its block and internals are so stout that 600, 800, even 1,000+ horsepower builds are relatively commonplace. That engineering overengineering is why Supra prices have skyrocketed over the past decade.</p>

      <blockquote>"The 2JZ doesn't just make power — it practically begs for it." — Bilal Raza</blockquote>

      <h2>Why Values Keep Rising</h2>
      <p>Clean, stock MK4 Supras now regularly trade for over $100,000 USD. The combination of pop-culture status (Fast & Furious), genuine performance credentials, and rarity makes them blue-chip investments in the car world.</p>

      <h2>Our Verdict on the Classic</h2>
      <p>The MK4 Supra is proof that some cars transcend their era. It was brilliant in the '90s and it's even more desirable today. Whether you're a tuner chasing power records or a collector wanting a pristine example, the Supra delivers on every level.</p>

      <div class="article-score">
        <div class="score-num">9.5</div>
        <div class="score-label">RevZone Classic Score / 10</div>
      </div>
    `
  },
  {
    id: 3,
    title: "Tesla Model S Plaid vs. Porsche Taycan Turbo S: Ultimate EV Drag Race",
    category: "ev",
    date: "Oct 10, 2026",
    author: "Ayesha Malik",
    readTime: "7 min read",
    excerpt: "Silicon Valley brute force versus Stuttgart precision. We put the two fastest electric sedans on the drag strip and the track to find a winner.",
    emoji: "⚡",
    featured: true,
    content: `
      <h2>Two Schools of Thought</h2>
      <p>The Tesla Model S Plaid and the Porsche Taycan Turbo S represent fundamentally different philosophies. Tesla chases raw numbers — the Plaid claims 0–100 km/h in under 2 seconds. Porsche chases driver engagement and build quality that feels like a traditional sports car.</p>

      <h2>Drag Strip Results</h2>
      <p>On a prepared strip, the Plaid won convincingly — every single time. The tri-motor setup simply overwhelms the Taycan off the line. But that's not the full story.</p>

      <h2>Track Performance</h2>
      <p>On a circuit, the Taycan turned the tables. Its 800-volt architecture means it maintains consistent power for lap after lap without thermal throttling. The Plaid began losing performance after just a few hot laps.</p>

      <blockquote>"In a straight line, Tesla. On a track, Porsche. Pick your weapon." — Ayesha Malik</blockquote>

      <table class="spec-table">
        <tr><th>Spec</th><th>Tesla Model S Plaid</th><th>Porsche Taycan Turbo S</th></tr>
        <tr><td>Power</td><td>1,020 hp</td><td>761 hp</td></tr>
        <tr><td>0–100 km/h</td><td>1.99 sec</td><td>2.8 sec</td></tr>
        <tr><td>Range</td><td>637 km</td><td>510 km</td></tr>
        <tr><td>Voltage</td><td>400V</td><td>800V</td></tr>
      </table>

      <div class="article-score">
        <div class="score-num">9.0</div>
        <div class="score-label">Combined RevZone Score / 10</div>
      </div>
    `
  },
  {
    id: 4,
    title: "Budget Track Day Build: Turning a £2,000 Honda Civic Into a Circuit Weapon",
    category: "builds",
    date: "Sep 28, 2026",
    author: "Bilal Raza",
    readTime: "10 min read",
    excerpt: "You don't need a six-figure hypercar to have fun on track. We show how to build a competitive track day car on a shoestring budget.",
    emoji: "🔧",
    featured: false,
    content: `
      <h2>The Base Car: 2001 Honda Civic Type R (EP3)</h2>
      <p>We started with a scruffy but mechanically sound EP3 Civic Type R purchased for £1,800. The K20 engine was strong, the chassis was straight, but the exterior needed work. Perfect for a track build.</p>

      <h2>Phase 1: Safety (£600)</h2>
      <ul>
        <li>Four-point harness: £180</li>
        <li>Roll cage bar: £250</li>
        <li>Fire extinguisher and bracket: £90</li>
        <li>Helmet and gloves: £80 (second-hand)</li>
      </ul>

      <h2>Phase 2: Suspension & Brakes (£800)</h2>
      <p>Coilovers from a reputable brand at £450 transformed the handling. Braided brake lines, fresh fluid, and upgraded pads rounded out the package for under £350.</p>

      <h2>Phase 3: Engine (£200)</h2>
      <p>Fresh air filter, spark plugs, and a good service. The K20 didn't need much — it just needed attention.</p>

      <blockquote>"Total spend: £3,400. Total smiles per mile: priceless." — Bilal Raza</blockquote>

      <div class="article-score">
        <div class="score-num">8.5</div>
        <div class="score-label">Fun Factor / 10</div>
      </div>
    `
  },
  {
    id: 5,
    title: "2026 Ford Mustang Dark Horse: America's Answer to the GT3",
    category: "reviews",
    date: "Sep 20, 2026",
    author: "Saad Lagan",
    readTime: "9 min read",
    excerpt: "Ford's track-focused pony car gets the full RevZone treatment. Is the Dark Horse genuinely competitive with European rivals?",
    emoji: "🐎",
    featured: false,
    content: `
      <h2>A Mustang for Drivers</h2>
      <p>The Dark Horse is the most driver-focused Mustang ever sold. The 5.0-litre V8 has been hand-assembled, producing 500 hp. Magnetic ride dampers, a Torsen limited-slip diff, and optional Michelin Cup 2 tyres complete the package.</p>

      <h2>On Track</h2>
      <p>Around a circuit, the Dark Horse surprised us. Where previous performance Mustangs felt American in the pejorative sense — fast in a straight line, vague in a corner — the Dark Horse is genuinely competent. The steering is sharp, the brakes are strong, and the chassis is balanced.</p>

      <table class="spec-table">
        <tr><th>Spec</th><th>Detail</th></tr>
        <tr><td>Engine</td><td>5.0L Coyote V8 (hand-assembled)</td></tr>
        <tr><td>Power</td><td>500 hp</td></tr>
        <tr><td>Torque</td><td>557 Nm</td></tr>
        <tr><td>0–100 km/h</td><td>3.9 seconds</td></tr>
        <tr><td>Gearbox</td><td>6-speed manual or 10-speed auto</td></tr>
      </table>

      <div class="article-score">
        <div class="score-num">8.7</div>
        <div class="score-label">RevZone Score / 10</div>
      </div>
    `
  },
  {
    id: 6,
    title: "The Best Driving Roads in Pakistan: A Car Fan's Road Trip Guide",
    category: "lifestyle",
    date: "Sep 10, 2026",
    author: "Saad Lagan",
    readTime: "5 min read",
    excerpt: "Pakistan is home to some of the world's most dramatic mountain passes and beautiful coastal roads. Here's where to take your car for an unforgettable drive.",
    emoji: "🛣️",
    featured: false,
    content: `
      <h2>Karakoram Highway (KKH)</h2>
      <p>The KKH is one of the highest paved roads in the world, connecting Pakistan to China through the Karakoram mountain range. It's dramatic, challenging, and breathtakingly beautiful. Drive it in a proper 4x4 — the surface can be unpredictable.</p>

      <h2>Deosai Plateau</h2>
      <p>At 4,115 metres above sea level, the Deosai Plains offer vast open roads surrounded by wildflowers and mountains. The plateau is only accessible from June to September. An SUV is essential.</p>

      <h2>Makran Coastal Highway</h2>
      <p>If mountains aren't your thing, the coastal highway from Karachi to Gwadar offers sweeping ocean views and wide, flowing corners. A grand tourer would be perfect here.</p>

      <blockquote>"Pakistan has some of the most rewarding driving roads on earth — they're just underrated." — Saad Lagan</blockquote>
    `
  },
  {
    id: 7,
    title: "BMW M3 Competition vs. Mercedes-AMG C63 S: German Sport Sedan Shootout",
    category: "reviews",
    date: "Aug 30, 2026",
    author: "Ayesha Malik",
    readTime: "8 min read",
    excerpt: "Two iconic sport sedans, two very different characters. We push both to their limits to find out which deserves your money.",
    emoji: "🚗",
    featured: false,
    content: `
      <h2>The Rivals</h2>
      <p>The BMW M3 Competition and the AMG C63 S have been trading blows for decades. The 2025 generation sees AMG switch to a controversial 2.0-litre four-cylinder hybrid setup, while BMW sticks to its trusted 3.0-litre twin-turbo straight-six.</p>

      <h2>BMW M3: The Driver's Choice</h2>
      <p>With 510 hp, a manual gearbox option, and a chassis tuned to communicate every nuance of the road, the M3 is pure driving pleasure. It's the more traditional choice, and many would say the more honest one.</p>

      <h2>AMG C63 S: The Tech Showcase</h2>
      <p>The C63 S' hybrid system produces 476 hp total and features instant electric torque. It's blindingly quick but the character is harder to love. The electric steering and complex modes require patience to master.</p>

      <table class="spec-table">
        <tr><th>Spec</th><th>BMW M3</th><th>AMG C63 S</th></tr>
        <tr><td>Power</td><td>510 hp</td><td>476 hp</td></tr>
        <tr><td>0–100 km/h</td><td>3.5 sec</td><td>3.4 sec</td></tr>
        <tr><td>Engine</td><td>3.0L I6 TT</td><td>2.0L I4 Hybrid</td></tr>
      </table>

      <p><strong>Winner:</strong> BMW M3. For drivers, there's no contest. The M3 is more rewarding to drive quickly and feels more special to own.</p>

      <div class="article-score">
        <div class="score-num">8.9</div>
        <div class="score-label">BMW M3 RevZone Score / 10</div>
      </div>
    `
  },
  {
    id: 8,
    title: "Ferrari SF90 Stradale: When a Road Car Becomes a Racing Car",
    category: "reviews",
    date: "Aug 15, 2026",
    author: "Saad Lagan",
    readTime: "9 min read",
    excerpt: "Ferrari's hybrid hypercar blurs the line between road and race. We spend a day with the 986 hp SF90 to find out if it lives up to the legend.",
    emoji: "🔴",
    featured: false,
    content: `
      <h2>986 Horsepower of Italian Fury</h2>
      <p>The SF90 Stradale's party trick is combining a 769 hp twin-turbo V8 with three electric motors to produce a combined 986 hp. It's Ferrari's most powerful road car and it has the performance to match.</p>

      <h2>0–100 in 2.5 Seconds</h2>
      <p>On a smooth road with launch control armed, the SF90 demolishes the 0–100 benchmark in 2.5 seconds. The acceleration is almost violent — a sensation that doesn't diminish no matter how many times you do it.</p>

      <blockquote>"The SF90 is the fastest thing I have ever driven on a public road. Full stop." — Saad Lagan</blockquote>

      <div class="article-score">
        <div class="score-num">9.6</div>
        <div class="score-label">RevZone Score / 10</div>
      </div>
    `
  },
  {
    id: 9,
    title: "Why Manual Gearboxes Are Making a Comeback",
    category: "news",
    date: "Aug 1, 2026",
    author: "Bilal Raza",
    readTime: "4 min read",
    excerpt: "Against all predictions, three-pedal cars are selling better than ever. We explore the cultural shift driving the manual transmission renaissance.",
    emoji: "⚙️",
    featured: false,
    content: `
      <h2>The Numbers Don't Lie</h2>
      <p>After years of decline, manual transmission sales in the US have ticked upward for three consecutive years. In Europe, the trend is even more pronounced among performance and enthusiast vehicles.</p>

      <h2>The Younger Generation</h2>
      <p>Counter-intuitively, it's younger drivers leading the charge. Social media has romanticised the driving stick, and many younger enthusiasts see it as a rite of passage. "Learning to drive manual" content consistently performs well on YouTube and Instagram.</p>

      <h2>Manufacturers Responding</h2>
      <p>Ford brought back the Mustang manual. Porsche never dropped the 911 MT. Toyota introduced a manual for the GR86. Even BMW added a manual to the M2 despite discontinuing it elsewhere. The market has spoken.</p>

      <blockquote>"The manual isn't dying — it's evolving into something more precious and desirable." — Bilal Raza</blockquote>
    `
  },
  {
    id: 10,
    title: "Lamborghini Revuelto: The V12 Lives On (With a Little Help From Electricity)",
    category: "reviews",
    date: "Jul 20, 2026",
    author: "Ayesha Malik",
    readTime: "8 min read",
    excerpt: "Lamborghini's all-new V12 hybrid supercar arrives with 1,001 hp and an attitude problem. We take it to the limit on a private circuit.",
    emoji: "🐂",
    featured: false,
    content: `
      <h2>The New V12 Era</h2>
      <p>The Revuelto replaces the legendary Aventador, but rather than abandoning the V12, Lamborghini has electrified it. The naturally aspirated 6.5-litre unit now works alongside three electric motors for a total of 1,001 hp.</p>

      <h2>An Impossible Machine</h2>
      <p>The Revuelto is faster in every quantifiable metric than the car it replaces. But more importantly, it feels like a Lamborghini should — dramatic, theatrical, and slightly terrifying in the best possible way.</p>

      <div class="article-score">
        <div class="score-num">9.4</div>
        <div class="score-label">RevZone Score / 10</div>
      </div>
    `
  },
  {
    id: 11,
    title: "Top 10 Car Modifications Under £500 That Actually Make a Difference",
    category: "builds",
    date: "Jul 5, 2026",
    author: "Bilal Raza",
    readTime: "6 min read",
    excerpt: "Want to improve your daily driver without breaking the bank? Here are the ten best bang-for-buck modifications every car fan should know about.",
    emoji: "🛠️",
    featured: false,
    content: `
      <h2>1. Coilover Springs</h2>
      <p>Drop springs can transform the look and handling of a car for £150–£300. Paired with good shock absorbers, this is the single most impactful modification for daily driving enjoyment.</p>

      <h2>2. Upgraded Brake Pads</h2>
      <p>Decent pads like EBC Greenstuff for road use or Yellowstuff for occasional track days cost £80–£150 and massively improve feel and performance.</p>

      <h2>3. Performance Air Filter</h2>
      <p>A K&N or similar panel filter won't give you huge power gains, but it does improve throttle response and sounds better. Cost: £40–£80.</p>

      <h2>4. Fresh Tyres</h2>
      <p>The single most important contact patch between you and the road. Don't cheap out here. Budget for quality rubber — it's the best safety and performance investment you can make.</p>

      <h2>5. Alignment</h2>
      <p>A proper four-wheel alignment with corner weighting (~£150) will make any car feel more alert and even out tyre wear. Night and day difference on older cars.</p>
    `
  },
  {
    id: 12,
    title: "The Koenigsegg Gemera: A 2,300 hp Family Car with Four Seats",
    category: "news",
    date: "Jun 18, 2026",
    author: "Saad Lagan",
    readTime: "5 min read",
    excerpt: "Sweden's hypercar manufacturer builds the world's most powerful family car. Is the Gemera proof that you don't have to choose between performance and practicality?",
    emoji: "🇸🇪",
    featured: false,
    content: `
      <h2>The World's Most Extreme GT</h2>
      <p>The Koenigsegg Gemera defies categorisation. It has four seats (and four doors), yet it produces 2,300 hp from its twin-turbo 2.0-litre three-cylinder engine combined with three electric motors. Yes, you read that correctly — 2,300 horsepower.</p>

      <h2>0–400 km/h in Under 20 Seconds</h2>
      <p>Koenigsegg claims the Gemera can accelerate from 0 to 400 km/h and brake back to standstill in under 20 seconds. No family car has ever come close to this territory. And yet, the rear seats have 90mm of legroom and ISOFIX child seat mounts.</p>

      <blockquote>"The Gemera proves that 'family car' and 'hypercar' are not mutually exclusive." — Saad Lagan</blockquote>
    `
  }
];
