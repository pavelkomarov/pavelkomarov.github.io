---
layout: post
permalink: /hot_takes.html
title: Hot Takes
subtitle: strong opinions, loosely held
description: Strong opinions on ML, math, epistemics, and the nature of intelligence — co-drafted with Claude.
emoji: 🔥
color: "#00283c"
order: 9
---

## Hot Takes

*These opinions were developed and refined in conversation with Claude (Anthropic). The views are mine; the articulation was collaborative.*

---

**OOP is usually not worth it for scientific/numerical code.**
Came from two years TAing intro OOP in Java at Georgia Tech, then years of writing algorithmic Python for research and industry. Objects make sense when state is genuinely complex and needs hiding, and when teams/codebases are large enough to justify the abstraction overhead (enterprise software, game engines, GUIs). For numerical code, the state is arrays and the operations are math — OOP wraps that in indirection that obscures rather than clarifies. Functional style keeps everything bare on the surface. Abstractions only earn their cost when what's being abstracted is complex and stable enough to warrant a boundary.

---

**ML papers often present special-case results as general ones.**
Elegant derivations that quietly rely on load-bearing assumptions (Gaussian distributions, diagonal covariance, linearity) without admitting those assumptions are restrictive. The math section implies generality; the implementation section makes a convenient special-case choice; the gap goes unremarked. Infuriating. (Note: pure math papers are usually scrupulously precise about scope — this is an ML community habit of borrowing mathematical style without the accompanying rigor.)

---

**Analytic applied math is often a dead end for real engineering complexity.**
People have been banging their heads on grand challenges (turbulence, complex geometry, general contact) for decades or centuries without closed-form solutions. Mathematical tricks get intense, and the resulting model is narrowly useful. Occasional paradigm shifts (convex optimization, information theory) happen but rarely. The math community generally finds tractable special cases and proves results there, hoping they generalize — which often they don't.

Optimal control and calculus of variations are a good example: beautiful when you have known smooth costs and known dynamics (LQR, orbital mechanics, clean robotics). But for chaotic or high-dimensional systems you can't write the Lagrangian, can't verify regularity conditions, and the HJB PDE is completely intractable. The community spent decades extending these tools to harder problems with diminishing returns — meanwhile RL just said "forget the structure, parameterize and optimize" and handled a vastly wider class of problems. The Weierstrass condition (weak vs. strong minimum) is a beautiful piece of mathematics that has probably never influenced a single engineering decision in practice.

---

**Learned approaches are winning because compute beats ingenuity at scale.**
Parameterize richly, throw compute at it, add clever regularizers, get a good approximation of whatever you want without hard thinking. You lose optimality guarantees and interpretability, but gain wide applicability and practical performance. Gradient descent + GPUs often outperforms decades of human mathematical ingenuity for real-world complexity. The TRPO→PPO and surprise→RND arcs are good examples: theoretical justification first, then engineering hack that's cheaper and works just as well in practice. The best position: use known math where it's tractable (physics, known symmetries), use learning where it isn't (geometry, representations) — don't force analytic solutions onto problems that don't admit them, but don't throw away structure you actually have.

The transformer is the clearest possible example: every individual operation is trivial (dot product, softmax, weighted average, two-layer MLP, add, normalize). No elaborate theoretical machinery, no load-bearing special-case assumptions. Intelligence emerges entirely from composition and scale — embarrassingly simple operations stacked 80 deep and run at massive scale. The opposite of the complexity you find in classical applied math, and arguably more powerful for it.

---

**The people who preach humility loudest are often the least humble.**
The Evangelicals who raised me constantly invoked humility, but their version was deference to authority and scripture — which costs nothing intellectually and requires no actual examination of your own assumptions. Refusing to question your foundational beliefs while calling it humility is its own kind of pride. Real epistemic humility is uncomfortable and looks like doubt from the outside.

---

**Teaching falsifiability and calibration should be high-leverage curriculum.**
"What would change your mind?" and "that's not falsifiable" as common cultural currency would measurably raise baseline discourse quality. High-leverage additions: probability/calibration, historiography, logical fallacies with names, philosophy of science basics. America's anti-intellectualism is the structural barrier.

---

**Mass disillusionment doesn't produce better epistemics — it produces demand for the next shyster.**
Post-Soviet Russia didn't get epistemic renewal, it got "nothing is true and everything is permitted" — arguably worse than naive ideology. Weimar Germany: total disillusionment, vacuum filled by something worse. People need a narrative; destroy the old one without replacing it with good epistemics and they'll take whatever strong story comes next.

---

**We punish visible belief-updating as flip-flopping instead of rewarding it as intellectual honesty.**
This is backwards. Changing your mind when evidence warrants it is the correct behavior. The cultural incentive to appear consistent forces epistemic cowardice.

---

**The three paradigms of intelligence — symbolicism, connectionism, dynamicism — are genuinely distinct levels, not just implementation choices.**
Chess is tractable symbolicism: enumerate states, apply rules, search the tree. Face recognition broke symbolicism and required connectionism: statistics, optimization, learned representations. The next level — wound healing, genuine adaptation, self-organization, in-context learning — requires dynamicism: intelligence as emergent property of a dynamical system's attractors and invariants, not as stored data or learned weights. Each level is implemented by the one below (dynamicism runs on connectionist hardware which runs on silicon) but that doesn't collapse them — thermodynamics isn't just Newtonian mechanics, and dynamicism isn't just connectionism. Eliasmith critiqued 1990s dynamicism as metaphor rather than science; the meta-RL paper, Neural ODEs, reservoir computing, and liquid state machines have since made it rigorous. "Policy can be a behavioral description of a dynamical system rather than a data structure inside it." The brain figured this out: dopamine slowly shapes circuits whose activation dynamics implement a fast learner as emergent property. No policy stored anywhere — it falls out of the physics. LLMs doing in-context learning without weight updates are the first large-scale existence proof that this works at scale.

---

**The missing ingredient in AI is something like Levin's bioelectric fields — global coordination letting local components maintain coherent whole-system behavior.**
Attention is a weak, feedforward, episodic approximation. What's needed is continuous, self-maintaining, self-healing dynamics. Friston's active inference, Levin's morphogenesis, Neural ODEs, and state space models (Mamba) are all pointing at this. The question stops being "what algorithm is this running" and becomes "what are the attractors and invariants of this dynamical system, and what problems do they solve." The good regulator theorem gestures at why: an optimal regulator must be a deterministic function of system state — which means the regulator's dynamics must track the system's dynamics. But note the theorem is oversold; it proves functional dependence, not structural homomorphism. The dream of optimization in model space being equivalent to optimization in physics space requires the stronger claim, which may only hold when physics constrains the solution space so heavily that wrong internal structures can't fit the data.

---

**The analog→digital→dynamical arc is the history of computation trying to recover what it gave up.**
Analog computers were computation as physics — wire up a circuit and the voltage dynamics *are* the differential equation. Fast, continuous, no discretization, but fragile and unscalable. Digital computing traded physical correspondence for reliability and composability. Learned dynamical systems on digital substrates are a third thing: use reliable discrete hardware but program it by shaping emergent continuous dynamics rather than explicit instructions. The weights are the program; the computation falls out of the physics those weights induce. We gave up analog's directness to get scale, and now we're trying to recover dynamical richness without giving up scale. Neuromorphic hardware (Intel Loihi, IBM) is the bet that eventually the substrate should match the computation again.
