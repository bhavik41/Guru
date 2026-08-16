export const products = [
  {
    symbol: 'O₂', name: 'Oxygen', cat: 'Pure Gases',
    desc: 'High-purity O₂ for steel, welding & healthcare',
    details: 'Oxygen, a colorless and odorless gas, constitutes 21% of the air and is the most common element on Earth. It is crucial for processes requiring high temperatures and enhances the combustion of flammable materials. Key applications include melting, welding & cutting in steel industries, as well as ship breaking and building.',
    specs: [
      { label: 'Colour', value: 'Black' },
      { label: 'Water Capacity', value: '47 Liter' },
      { label: 'Chemical Name', value: 'O₂' },
      { label: 'Contents', value: '7 Cubic Meter Gas' },
      { label: 'Indian Standard', value: 'IS : 309' },
      { label: 'Req. Pressure', value: '140-150 kg./cm²' },
    ],
  },
  {
    symbol: 'N₂', name: 'Nitrogen', cat: 'Pure Gases',
    desc: 'Inerting, blanketing & purging grade N₂',
    details: 'Comprising 78% of the air, nitrogen is utilized in applications where oxygen is undesirable due to its ability to displace it. In its cryogenic liquid form, nitrogen serves as an efficient coolant. Common uses include protecting production processes (e.g. printed board assemblies), cooling & freezing food, inerting pipelines or tanks, and various cryogenic industrial applications. It is also integral to the manufacture of products based on small-molecule active pharmaceutical ingredients (API).',
    specs: [
      { label: 'Colour', value: 'Grey with Black Neck (Shoulder)' },
      { label: 'Water Capacity', value: '47 Liter' },
      { label: 'Chemical Name', value: 'N₂' },
      { label: 'Contents', value: '7 Cubic Meter Gas' },
      { label: 'Indian Standard', value: 'IS : 1747' },
      { label: 'Req. Pressure', value: '140-150 kg./cm²' },
    ],
  },
  {
    symbol: 'CO₂', name: 'Carbon Dioxide', cat: 'Pure Gases',
    desc: 'Food-grade & industrial carbon dioxide',
    details: 'High-purity carbon dioxide, typically obtained as a chemical industry by-product or from underground sources, is used in industrial applications as a liquid, gas or solid (dry ice). Its diverse properties lend it to carbonated beverage manufacturing, food processing for cooling, preservation or pH control, chemical blanketing, pH control in water treatment, metal welding shielding, stimulating biological growth, and as a fire-extinguishing agent.',
    specs: [
      { label: 'Colour', value: 'Black Color with White Neck' },
      { label: 'Water Capacity', value: '47 Liter' },
      { label: 'Chemical Name', value: 'CO₂' },
      { label: 'Contents', value: 'KG.' },
      { label: 'Indian Standard', value: 'IS : 307' },
    ],
  },
  {
    symbol: 'H₂', name: 'Hydrogen', cat: 'Pure Gases',
    desc: 'Ultra-pure H₂ for process & fuel applications',
    details: 'Hydrogen, the lightest and most abundant chemical element in the Universe, is present in all living organisms. Industrially it is produced from natural gas or through water electrolysis. It is extensively used as a carrier gas in gas chromatography and as an ambient gas for annealing furnaces in special steel production and sintering furnaces in powder metallurgy. Additionally, it plays a role in glass engineering and optical fiber processing.',
    specs: [
      { label: 'Colour', value: 'Signal Red' },
      { label: 'Water Capacity', value: '47 Liter' },
      { label: 'Chemical Name', value: 'H₂' },
      { label: 'Contents', value: '7 Cubic Meter Gas' },
      { label: 'Indian Standard', value: 'IS : 1090' },
      { label: 'Req. Pressure', value: '140-150 kg./cm²' },
    ],
  },
  {
    symbol: 'C₂H₂', name: 'Dissolved Acetylene', cat: 'Pure Gases',
    desc: 'Stable DA for cutting & welding',
    details: 'Acetylene is a colorless, combustible gas with a distinctive odor, requiring special precautions during production and handling. It is commonly used in oxy-acetylene welding and metal cutting, and as a raw material for producing various organic chemicals essential for polyurethane and polyester plastics.',
    specs: [
      { label: 'Colour', value: 'Maroon' },
      { label: 'Water Capacity', value: '41 Liter' },
      { label: 'Chemical Name', value: 'C₂H₂' },
      { label: 'Contents', value: '5 to 7 Cubic Meter Gas' },
      { label: 'Indian Standard', value: 'IS : 308' },
      { label: 'Req. Pressure', value: '12-17 kg./cm²' },
    ],
  },
  {
    symbol: 'Ar', name: 'Argon', cat: 'Pure Gases',
    desc: 'Shielding gas for TIG / MIG welding',
    details: 'Argon is produced through the fractional distillation of liquid air and is primarily used as an inert shielding gas in welding and other high-temperature industrial processes where typically non-reactive substances become reactive. It is combined with other gases for welding automotive components like auto parts, frames & mufflers. Argon also provides an oxygen and nitrogen-free environment for annealing processes and is a vital component in airbags.',
    specs: [
      { label: 'Colour', value: 'Peacock Blue' },
      { label: 'Water Capacity', value: '47 Liter' },
      { label: 'Chemical Name', value: 'Ar' },
      { label: 'Contents', value: '7 Cubic Meter Gas' },
      { label: 'Indian Standard', value: 'IS : 5760' },
      { label: 'Req. Pressure', value: '140-150 kg./cm²' },
    ],
  },
  {
    symbol: '✚', name: 'Medical Gases', cat: 'Medical',
    desc: 'Life-support grade gases for hospitals',
    details: 'Medical gases, including oxygen, nitrogen & nitrous oxide, are essential for healthcare, particularly in clinical treatment and emergency medicine. Medical oxygen supports respiration, while liquid nitrogen is used for cryotherapy, cryosurgery & biological material storage. Nitrous oxide is indispensable for analgesia, anesthetic induction and combined anesthesia.',
  },
  {
    symbol: 'He', name: 'Helium', cat: 'Specialty',
    desc: 'Leak-testing, cryogenic & lifting helium',
    details: 'Helium is an inert gas, the second lightest element, characterized by being colorless, odorless & tasteless. It liquefies at an extremely low temperature of −268.9 °C. It is employed as an inert-gas atmosphere for welding metals like aluminum, in rocket propulsion for pressurizing fuel tanks, in meteorology as a lifting gas for balloons, in cryogenics as a coolant, and in high-pressure breathing operations when mixed with oxygen.',
  },
  {
    symbol: 'NH₃', name: 'Ammonia', cat: 'Chemicals',
    desc: 'Anhydrous NH₃ for refrigeration & industry',
    details: 'Ammonia is a colorless, pungent gas composed of nitrogen & hydrogen, serving as the simplest stable compound of these elements and a precursor for many commercially significant nitrogen compounds. Its primary use is as a fertilizer, often applied directly to soil as liquefied gas or as ammonium salts. It is also used in manufacturing commercial explosives, in the textile industry for synthetic fibers, dyeing & scouring, as a catalyst in synthetic resins, for neutralizing acidic by-products in petroleum refining, and in the rubber industry to prevent latex coagulation. Ammonia is integral to the ammonia-soda (Solvay) process, the Ostwald process, and metallurgical processes like nitriding. Its ability to absorb substantial heat makes it useful as a coolant in refrigeration & air-conditioning.',
  },
  {
    symbol: 'R', name: 'Refrigerant Gases', cat: 'Specialty',
    desc: 'Complete range of refrigerant gases',
  },
  {
    symbol: 'Mx', name: 'Calibration Gas Mixture', cat: 'Specialty',
    desc: 'Certified multi-component mixtures',
    details: 'A calibration gas is a blend of two or more gases with a carrier gas, serving as a reference for calibrating analytical instruments, gas analyzers & detectors in laboratories and research centers. The accuracy of calibration gas is paramount and must be traceable to national or international standards. Key factors like Preparation Tolerance Level (PTL) and Certification Accuracy (CA) are critical for ensuring precise calibration. These mixtures are supplied in carbon alloy steel or aluminum cylinders.',
  },
  {
    symbol: 'FE', name: 'Fire Extinguisher', cat: 'Equipment',
    desc: 'CO₂ & clean-agent fire safety systems',
    details: 'Guru Industries supplies a range of fire extinguishers in various models, sizes & types. All extinguishers meet stringent national (ISI, BIS) and international (CE) standards.',
    list: ['ABC Type', 'BC Type', 'Clean Agent', 'Carbon Dioxide Type', 'Water Type', 'Foam Type'],
  },
  {
    symbol: 'Xe', name: 'Xenon', cat: 'Specialty',
    desc: 'Rare noble gas for lighting & imaging',
    details: 'Xenon (Xe), a chemical element with atomic number 54, is a colorless, dense, odorless noble gas found in trace amounts in Earth’s atmosphere. Though generally unreactive, it can form compounds like xenon hexafluoroplatinate. Xenon is used in flash lamps, arc lamps, and as a general anesthetic. Early excimer laser designs utilized a xenon dimer molecule (Xe₂) as the lasing medium, and it is also employed as a propellant for ion thrusters in spacecraft.',
  },
  {
    symbol: 'Kr', name: 'Krypton', cat: 'Specialty',
    desc: 'Noble gas for insulation & lasers',
    details: 'Krypton (Kr), a chemical element with atomic number 36, is a colorless, odorless, tasteless noble gas present in trace amounts in the atmosphere and chemically inert with rare exceptions. It is used in lighting & photography, producing many spectral lines. Krypton plasma is effective in bright, high-powered gas lasers (krypton ion & excimer lasers), and krypton fluoride is also a useful laser medium.',
  },
  {
    symbol: 'Eq', name: 'Equipments', cat: 'Equipment',
    desc: 'Regulators, manifolds & flow devices',
    list: ['Gas Cylinder Regulator', 'Gas Sampling Cylinder', 'Connecting Hoses', 'Interconnecting Fitting & Ferrules', 'Gas Manifold'],
  },
  {
    symbol: 'HP', name: 'Highly Pure Gas Mixtures', cat: 'Specialty',
    desc: 'Lab-grade high-purity blends',
    details: 'Guru Industries provides highly pure gas mixtures for welding, process, research and laser applications — including P10 Gas (10% Methane in Argon), P5 Gas (5% Methane in Argon), and 10% Ethane balance Argon.',
    specTable: {
      caption: 'Welding Gas Mixtures',
      columns: ['Gas Mixture', 'Type of Weld', 'Metal'],
      rows: [
        ['Argon + Nitrogen', 'Auto Bulbs', 'Copper & Alloys'],
        ['Argon + Oxygen', 'MIG', 'Stainless Steel'],
        ['Argon + Carbon Dioxide', 'MIG Welding Mild Steel', 'Carbon Steel'],
        ['Argon + Hydrogen', 'TIG Welding Stainless Steel', 'Stainless Steel'],
      ],
    },
    list: [
      'Process & Research mixtures — Ammonia, Carbon Monoxide, Chlorine, Hydrogen Sulfide, Sulfur Dioxide, Deuterium/Oxygen/Nitrogen blends, custom concentrations to specification',
      'Laser gas mixtures — Xenon/Helium, Helium-Neon, CO₂/N₂/He surgical & research blends',
      'Excimer laser mixtures — Hydrogen Chloride with Xenon, Argon, Helium or Neon',
    ],
  },
  {
    symbol: 'PSA', name: 'PSA Plant O₂ / N₂', cat: 'Equipment',
    desc: 'On-site oxygen / nitrogen generation',
  },
  {
    symbol: 'GC', name: 'Gas Cylinder Cascade', cat: 'Equipment',
    desc: 'High-capacity cylinder cascades',
    details: 'High-capacity cylinder cascade systems for centralized gas supply. Full specification available on request.',
  },
  {
    symbol: 'BC', name: 'Bulk Chemicals', cat: 'Chemicals',
    desc: 'Industrial chemicals supplied in bulk',
    details: 'Guru Industries supplies a wide range of industrial and laboratory-grade chemicals in bulk quantities.',
    chemLists: {
      industrial: [
        'Mono Ethylene Glycol', 'Di Ethylene Glycol', 'Tri Ethylene Glycol', 'Iso Propyl Alcohol',
        'Toluene', 'N Butyle Acetate', 'Acetone', 'Acetonitrile', 'Ethyle Acetate',
        'Hydro Chloric Acid', 'Sulphuric Acid', 'N Butanol', 'Benzene', 'Methanol',
        'Ortho Xylene', 'Ethylene Di Chloride', 'Tri Chloro Benzene', 'Mix Solvent',
      ],
      lab: [
        'Standard Silver Nitrate (0.02N)', 'Erichrome Black T Indicator', 'Cal Ed Indicator',
        'Murexide Indicator', 'Phenolphthalein Indicator', 'Methyl Orange Indicator',
        'Molybdate 3 Reagent Solution', 'Sodium Tartrate', 'Methanol', 'Citric Acid Powder',
        'Acid Reagent Powder Pillow', 'Amino Acid F Reagent Powder Pillow', 'Sulfaver 4 Powder Pillow',
        'Nitraver 5 Reagent Powder Pillow', 'Magnesium Chloride', 'Sodium Chloride', 'Potassium Chloride',
        'Xylene', 'Sodium Sulphate Anhydrous', 'Potassium Hydroxide', 'Sodium Hydroxide',
        'Chlorotex Reagent Indicator', 'Ammonium Hydroxide', 'DI Sodium Hydrogen Phosphate',
        'Potassium DI Chromate', 'Acetone',
      ],
    },
  },
  {
    symbol: 'HC', name: 'Hydrocarbon & Rare Gases', cat: 'Specialty',
    desc: 'CH₄, C₃H₈ & specialty hydrocarbons',
  },
  {
    symbol: 'HCl', name: 'Anhydrous HCl / Dry HCL Gas', cat: 'Chemicals',
    desc: 'Dry HCl for pharma & semiconductor',
    details: 'Anhydrous hydrogen chloride (AHCl) is a colorless gas that readily dissolves in water to form hydrochloric acid. Its hygroscopic nature causes it to form white fumes — a mist of hydrochloric acid — in moist air. AHCl is used to mediate the growth of epitaxial films of silicon, germanium & III-V materials, and to remove surface oxides and etch metallic thin films.',
  },
]

export const productCategories = ['All', 'Pure Gases', 'Specialty', 'Medical', 'Equipment', 'Chemicals']

export const services = [
  {
    num: '01', icon: 'flask', title: 'Industrial Gases',
    desc: 'End-to-end supply of industrial-grade gases tailored to plant & process requirements.',
    details: 'Industrial gases are specially manufactured for diverse applications across sectors such as oil & gas, petrochemicals, chemicals, power, mining, steelmaking, metals, environmental protection, medicine, pharmaceuticals, biotechnology, food, water, fertilizers, nuclear power, electronics & aerospace. Primary gases supplied include nitrogen, oxygen, carbon dioxide, argon, hydrogen, helium & acetylene, with a wide array of other gases & mixtures available in cylinders.',
  },
  {
    num: '02', icon: 'wind', title: 'Nitrogen Purging',
    desc: 'Safe, efficient nitrogen purging services for pipelines and pressure systems.',
    details: 'Nitrogen purging is highly effective in the oil and gas, onshore and offshore pipeline industries, creating a safe working environment for maintenance during shutdown and start-up operations. Guru Industries specializes in nitrogen services, offering a large and versatile fleet of mobile, self-contained nitrogen pumping and vaporization equipment.',
    methods: [
      { title: 'Vacuum Purging', desc: 'For vessels designed to withstand vacuum pressure — repeatedly drawing a vacuum then filling with inert gas.' },
      { title: 'Pressure Purging', desc: 'For vessels designed for elevated pressure — repeatedly pressurizing with inert gas, mixing, then relieving pressure.' },
      { title: 'Siphon Purging', desc: 'A two-step process: displacing gas by filling the vessel with liquid, then displacing the liquid with purge gas.' },
      { title: 'Sweep-Through Purging', desc: 'Purge gas flows continuously through the vessel, displacing and mixing with residual gas, avoiding dead volumes.' },
    ],
  },
  {
    num: '03', icon: 'wrench', title: 'Equipment Rental',
    desc: 'Reliable rental of gas handling & testing equipment for short and long-term projects.',
    list: [
      'Industrial Gas Cylinders', 'Gas Cylinder Manifold', 'Nitrogen Vaporizers', 'PortaCryo Tank – 1KL',
      'Cryogenic Transport Tanker', 'Nitrogen Pumping Skid', 'Gas Cylinder Bank (Cascade)',
      'Gas Pressure Reducing Skid', 'Cryogenic ISO Storage Tank',
    ],
  },
  {
    num: '04', icon: 'gauge', title: 'High Pressure Pneumatic Testing',
    desc: 'Precision pneumatic testing ensuring safety & compliance under high pressure.',
    details: 'Pneumatic testing is a strength testing technique used in the oil and gas industry to verify the mechanical strength and integrity of pressure-containing components. It ensures a system can safely operate at its maximum pressure by testing it at 110% of its designed limit using air or an inert gas like nitrogen. Particularly useful when hydrostatic testing is impractical — e.g. when water weight is too high or water introduction would be detrimental to the process.',
    list: ['Accurate test results', 'No post-testing drying or cleaning', 'No contamination of pipelines', 'Certified records'],
  },
  {
    num: '05', icon: 'droplet', title: 'Drying',
    desc: 'Air, nitrogen & vacuum drying to remove moisture before system start-up.',
    details: 'Guru Industries offers air, nitrogen & vacuum drying techniques to thoroughly remove moisture and water from systems before start-up. This process aims to achieve optimal dew point levels, maintaining product purity, minimizing corrosion, and optimizing efficiency and safety. Drying is a necessary procedure following pressure or leak/tightness tests during pre-commissioning. Our personnel assess each situation to recommend the safest, most reliable & cost-effective drying solution.',
  },
]

export const clients = [
  { name: 'Cairn Oil & Gas', logo: '/logos/cairn.png' },
  { name: 'Reliance Industries', logo: '/logos/reliance.png' },
  { name: 'Linde', logo: '/logos/linde.png' },
  { name: 'Schlumberger', logo: '/logos/schlumberger.png' },
  { name: 'Halliburton', logo: '/logos/halliburton.png' },
  { name: 'Tata Projects', logo: '/logos/tata-projects.png' },
  { name: 'Vedanta', logo: '/logos/vedanta.png' },
  { name: 'Catskill Infra', logo: '/logos/catskill.png' },
  { name: 'HMEL', logo: '/logos/hmel.png' },
  { name: 'Modern Industrial', logo: '/logos/modern-industrial.png' },
  { name: 'Binani Braj Group', logo: '/logos/binani.png' },
  { name: 'JK Lakshmi Cement', logo: '/logos/jk-lakshmi.png' },
  { name: 'Banas Dairy', logo: '/logos/banas-dairy.png' },
  { name: 'SDAU', logo: '/logos/sdau.jpg' },
  { name: 'Duke Plasto Technique', logo: '/logos/duke.png' },
  { name: 'Howe Benchmarking', logo: '/logos/howe.png' },
  { name: 'Jyotindra', logo: '/logos/jyotindra.png' },
  { name: 'India One Solar Thermal', logo: '/logos/india-one-solar.jpg' },
  { name: 'OCS', logo: '/logos/ocs.png' },
  { name: 'Aarti Industries', logo: '/logos/aarti-industries.png' },
  { name: 'Aegis Vopak Terminals', logo: '/logos/aegis-vopak.png' },
  { name: 'Atlas Copco', logo: '/logos/atlas-copco.png' },
  { name: 'BHEL', logo: '/logos/bhel.png' },
  { name: 'Balaji Amines', logo: '/logos/balaji-amines.png' },
  { name: 'Deepak Chemtech', logo: '/logos/deepak-chemtech.png' },
  { name: 'Deepak Phenolics', logo: '/logos/deepak-phenolics.webp' },
  { name: 'Dhaval Engineering', logo: '/logos/dhaval-engineering.png' },
  { name: 'ISRO', logo: '/logos/isro.png' },
  { name: 'Lakshya Powertech', logo: '/logos/lakshya-powertech.png' },
  { name: 'L&T Hydrocarbon', logo: '/logos/lt-hydrocarbon.png' },
  { name: 'MEIL', logo: '/logos/meil.png' },
  { name: 'McDermott', logo: '/logos/mcdermott.png' },
  { name: 'Oswal Infrastructure', logo: '/logos/oswal-infrastructure.png' },
  { name: 'Praj Industries', logo: '/logos/praj-industries.png' },
  { name: 'SP Bumi Armada', logo: '/logos/sp-bumi-armada.png' },
  { name: 'S Mark', logo: '/logos/s-mark.png' },
  { name: 'Sanjana Cryogenic', logo: '/logos/sanjana-cryogenic.png' },
  { name: 'Sopan', logo: '/logos/sopan.png' },
  { name: 'Sterling & Wilson', logo: '/logos/sterling-wilson.png' },
  { name: 'Technip Energies', logo: '/logos/technip-energies.png' },
  { name: 'Zydus', logo: '/logos/zydus.png' },
  { name: 'Vijay Tanks & Vessels', logo: '/logos/vijay-tanks.png' },
  { name: 'Symbiotec Pharmalab', logo: '/logos/symbiotec.png' },
  { name: 'Petrofac', logo: '/logos/petrofac.png' },
  { name: 'Vingas', logo: '/logos/vingas.jpg' },
]

export const plantGallery = [
  { src: '/plant/plant-guru-tanker-filling.jpg', caption: 'Loading a Guru Industries LIN/LOX tanker on site' },
  { src: '/plant/plant-refinery-delivery.jpg', caption: 'On-site delivery at a client refinery complex' },
  { src: '/plant/plant-hydrogen-shed-truck.jpg', caption: 'Hydrogen cylinder consignment ready for dispatch' },
  { src: '/plant/plant-warehouse-loading.jpg', caption: 'Cryogenic tank fabrication & loading bay' },
  { src: '/plant/plant-cylinder-yard.jpg', caption: 'Gas cylinder yard at a client plant' },
  { src: '/plant/plant-manifold-racks.jpg', caption: 'Manifold racks feeding a client process line' },
]

export const values = [
  { icon: 'target', title: 'Customer Orientation', desc: 'Focused on individual customer requirements to improve their competitiveness and performance.' },
  { icon: 'users', title: 'Employee Orientation', desc: 'We train, develop & promote motivated, efficient employees who act as responsible team players.' },
  { icon: 'globe', title: 'Responsible Behavior', desc: 'We take our social responsibility towards our employees and society very seriously.' },
]

export const missionVision = [
  {
    icon: 'shield',
    title: 'Mission',
    desc: 'As part of the earth & nature, we take responsibility for the safety of the environment — applying a well-rounded environment policy across our infrastructure to minimize pollutants and industrial waste released, keeping the environment purer and less polluted.',
  },
  {
    icon: 'bolt',
    title: 'Vision',
    desc: 'To perform the best role as manufacturer, trader & supplier in our field of business, delivering innovative and sustainable solutions for our clients in a connected world — helping them be more productive.',
  },
]

export const principles = [
  'Quality assurance', 'Constant research undertakings', 'Advanced infrastructure',
  'Adept team of professionals', 'Rich vendor base', 'Prompt delivery & fair prices',
]

export const stats = [
  { value: 2011, label: 'Established', suffix: '' },
  { value: 21, label: 'Product Lines', suffix: '+' },
  { value: 20, label: 'Marquee Clients', suffix: '+' },
  { value: 24, label: 'Hour Supply', suffix: '×7' },
]

export const inquiryPurposes = [
  'Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen', 'Dissolved Acetylene', 'Argon',
  'Medical Gases', 'Helium', 'Ammonia', 'Equipment Rental', 'Nitrogen Purging',
  'Pneumatic Testing', 'Drying', 'Import & Export', 'Others',
]

export const contact = {
  phones: ['(+91) 2742 283393', '(+91) 76000 76253', '(+91) 76000 76254'],
  emails: ['gurugases@yahoo.com', 'accounts@guruindustries.co.in'],
  address: ['Plot No. 114/47, Chandisar G.I.D.C.,', 'Palanpur-385001 (B.K.), Gujarat, India'],
  whatsapp: 'https://api.whatsapp.com/send?phone=919879946619&text=Hello,%20I%20am%20Interested%20in%20our%20Products.%20Please%20contact%20me.',
}
