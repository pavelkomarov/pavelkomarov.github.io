---
layout: page
permalink: /ti_c2000_middleware.html
title: TI C2000 Middleware
description: An abstraction layer for Texas Instruments C2000 microcontrollers, built for Georgia Tech Solar Racing.
emoji: 🔌
---

# TI C2000 Middleware

[GitHub Repository](https://github.com/pavelkomarov/TI-C2000-middleware)

Texas Instruments' C2000 microcontrollers are powerful devices for real-time control, but notoriously painful to program directly against the hardware registers. This project is a layered abstraction library developed for the [Georgia Tech Solar Racing](http://solarracing.gatech.edu) team on the **F28069** DSP microcontroller.

## Architecture

The codebase is organized into four tiers of abstraction, each building on the one below:

### 1. F28069Common — TI's Layer

Assembly, linker command, C source, and header files comprising Texas Instruments' own hardware abstraction layer. These expose raw register addresses and peripheral definitions for the F28069 chip and are shared across all projects as a foundation.

### 2. System Libraries — Pavel's Layer

A secondary abstraction written largely by Pavel that significantly simplifies interacting with C2000 peripherals. Each library wraps one subsystem:

| Library | What it does |
|---|---|
| **ADC** | Analog-to-digital conversion. Enum-based clock divisors (`WHOLE`, `HALF`, `FOURTH`) and 16 configurable start-of-conversion modules (`SOC0`–`SOC15`). |
| **CAN** | Controller Area Network bus. Supports `CAN_send`, `CAN_receive`, `CAN_request`, and `CAN_autoreply` with named node IDs (motor controller, pedals, BMS, IMU, WiFi, screen, MPPT). |
| **Clock** | System and peripheral clock configuration. |
| **FastFlash** | Optimized flash memory read/write access. |
| **GPIO** | General-purpose I/O pin configuration and control. |
| **Interrupts** | PIE (Peripheral Interrupt Expansion) controller setup and ISR registration. |
| **SCI** | Serial Communications Interface (UART-equivalent). |
| **SPI** | Serial Peripheral Interface for synchronous serial communication. |

### 3. Project Libraries

Higher-level abstractions built on top of System Libraries for specific project needs. Currently includes a **WiFi Library** for wireless communication.

### 4. Test Projects

Test programs that validate System and Project library behavior. These also serve as reference examples when starting new applications.

## Context

This middleware was developed while Pavel was a member of the Georgia Tech Solar Racing team. The solar car communicates internally over CAN bus, with distinct nodes for the motor controller, battery management system (BMS), pedals, inertial measurement unit (IMU), maximum power point trackers (MPPTs), and a driver-facing display screen.

The Code Composer Studio workspace uses include paths relative to `WORKSPACE_LOC` to stay portable across machines. More in-depth descriptions of specific projects and build instructions are on the [GT Solar Racing wiki](http://solarracing.gatech.edu/wiki/Main_Page).
