// Copyright (C) Parity Technologies (UK) Ltd.
// This file is part of Polkadot.

// Polkadot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Polkadot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Polkadot.  If not, see <http://www.gnu.org/licenses/>.
//! Autogenerated weights for `pallet_multisig`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-03-16, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `bm4`, CPU: `Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("polkadot-dev"), DB CACHE: 1024

// Executed Command:
// ./target/production/polkadot
// benchmark
// pallet
// --chain=polkadot-dev
// --steps=50
// --repeat=20
// --pallet=pallet_multisig
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --header=./file_header.txt
// --output=./runtime/polkadot/src/weights/

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::Weight};
use sp_std::marker::PhantomData;

/// Weight functions for `pallet_multisig`.
pub struct WeightInfo<T>(PhantomData<T>);
impl<T: frame_system::Config> pallet_multisig::WeightInfo for WeightInfo<T> {
	/// The range of component `z` is `[0, 10000]`.
	fn as_multi_threshold_1(z: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 11_763_000 picoseconds.
		Weight::from_parts(12_332_905, 0)
			.saturating_add(Weight::from_parts(0, 0))
			// Standard Error: 2
			.saturating_add(Weight::from_parts(494, 0).saturating_mul(z.into()))
	}
	/// Storage: Multisig Multisigs (r:1 w:1)
	/// Proof: Multisig Multisigs (max_values: None, max_size: Some(3346), added: 5821, mode: MaxEncodedLen)
	/// The range of component `s` is `[2, 100]`.
	/// The range of component `z` is `[0, 10000]`.
	fn as_multi_create(s: u32, z: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `267 + s * (2 ±0)`
		//  Estimated: `6811`
		// Minimum execution time: 36_295_000 picoseconds.
		Weight::from_parts(32_052_492, 0)
			.saturating_add(Weight::from_parts(0, 6811))
			// Standard Error: 1_348
			.saturating_add(Weight::from_parts(49_904, 0).saturating_mul(s.into()))
			// Standard Error: 13
			.saturating_add(Weight::from_parts(1_181, 0).saturating_mul(z.into()))
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	/// Storage: Multisig Multisigs (r:1 w:1)
	/// Proof: Multisig Multisigs (max_values: None, max_size: Some(3346), added: 5821, mode: MaxEncodedLen)
	/// The range of component `s` is `[3, 100]`.
	/// The range of component `z` is `[0, 10000]`.
	fn as_multi_approve(s: u32, z: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `286`
		//  Estimated: `6811`
		// Minimum execution time: 27_416_000 picoseconds.
		Weight::from_parts(21_742_435, 0)
			.saturating_add(Weight::from_parts(0, 6811))
			// Standard Error: 394
			.saturating_add(Weight::from_parts(59_934, 0).saturating_mul(s.into()))
			// Standard Error: 3
			.saturating_add(Weight::from_parts(1_148, 0).saturating_mul(z.into()))
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	/// Storage: Multisig Multisigs (r:1 w:1)
	/// Proof: Multisig Multisigs (max_values: None, max_size: Some(3346), added: 5821, mode: MaxEncodedLen)
	/// Storage: System Account (r:1 w:1)
	/// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	/// The range of component `s` is `[2, 100]`.
	/// The range of component `z` is `[0, 10000]`.
	fn as_multi_complete(s: u32, z: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `392 + s * (33 ±0)`
		//  Estimated: `10404`
		// Minimum execution time: 41_621_000 picoseconds.
		Weight::from_parts(34_915_089, 0)
			.saturating_add(Weight::from_parts(0, 10404))
			// Standard Error: 485
			.saturating_add(Weight::from_parts(73_141, 0).saturating_mul(s.into()))
			// Standard Error: 4
			.saturating_add(Weight::from_parts(1_217, 0).saturating_mul(z.into()))
			.saturating_add(T::DbWeight::get().reads(2))
			.saturating_add(T::DbWeight::get().writes(2))
	}
	/// Storage: Multisig Multisigs (r:1 w:1)
	/// Proof: Multisig Multisigs (max_values: None, max_size: Some(3346), added: 5821, mode: MaxEncodedLen)
	/// The range of component `s` is `[2, 100]`.
	fn approve_as_multi_create(s: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `267 + s * (2 ±0)`
		//  Estimated: `6811`
		// Minimum execution time: 28_725_000 picoseconds.
		Weight::from_parts(29_326_994, 0)
			.saturating_add(Weight::from_parts(0, 6811))
			// Standard Error: 661
			.saturating_add(Weight::from_parts(65_599, 0).saturating_mul(s.into()))
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	/// Storage: Multisig Multisigs (r:1 w:1)
	/// Proof: Multisig Multisigs (max_values: None, max_size: Some(3346), added: 5821, mode: MaxEncodedLen)
	/// The range of component `s` is `[2, 100]`.
	fn approve_as_multi_approve(s: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `286`
		//  Estimated: `6811`
		// Minimum execution time: 19_208_000 picoseconds.
		Weight::from_parts(20_086_797, 0)
			.saturating_add(Weight::from_parts(0, 6811))
			// Standard Error: 699
			.saturating_add(Weight::from_parts(54_418, 0).saturating_mul(s.into()))
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	/// Storage: Multisig Multisigs (r:1 w:1)
	/// Proof: Multisig Multisigs (max_values: None, max_size: Some(3346), added: 5821, mode: MaxEncodedLen)
	/// The range of component `s` is `[2, 100]`.
	fn cancel_as_multi(s: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `458 + s * (1 ±0)`
		//  Estimated: `6811`
		// Minimum execution time: 29_217_000 picoseconds.
		Weight::from_parts(30_489_686, 0)
			.saturating_add(Weight::from_parts(0, 6811))
			// Standard Error: 641
			.saturating_add(Weight::from_parts(60_784, 0).saturating_mul(s.into()))
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
}
